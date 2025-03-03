// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {
    ICoreProxy,
    PoolCollateralConfiguration,
    CollateralConfiguration
} from "@synthetixio/v3-contracts/1-main/ICoreProxy.sol";
import {IAccountProxy} from "@synthetixio/v3-contracts/1-main/IAccountProxy.sol";
import {IUSDProxy} from "@synthetixio/v3-contracts/1-main/IUSDProxy.sol";
import {ITreasuryMarketProxy} from "@synthetixio/v3-contracts/1-main/ITreasuryMarketProxy.sol";
import {ILegacyMarketProxy} from "@synthetixio/v3-contracts/1-main/ILegacyMarketProxy.sol";
import {IV2xUsd} from "@synthetixio/v3-contracts/1-main/IV2xUsd.sol";
import {IV2x} from "@synthetixio/v3-contracts/1-main/IV2x.sol";

import {ERC2771Context} from "@synthetixio/core-contracts/contracts/utils/ERC2771Context.sol";
import {IERC20} from "@synthetixio/core-contracts/contracts/interfaces/IERC20.sol";
import {IERC721Receiver} from "@synthetixio/core-contracts/contracts/interfaces/IERC721Receiver.sol";
import {IAddressResolver} from "./IAddressResolver.sol";

contract PositionManagerNewPool {
    error NotEnoughAllowance(
        address walletAddress, address tokenAddress, uint256 requiredAllowance, uint256 availableAllowance
    );
    error NotEnoughBalance(address walletAddress, address tokenAddress, uint256 requiredAmount, uint256 availableAmount);

    ICoreProxy public CoreProxy;
    IAccountProxy public AccountProxy;
    ITreasuryMarketProxy public TreasuryMarketProxy;
    ILegacyMarketProxy public LegacyMarketProxy;
    IAddressResolver public V2xResolver;

    uint256 public constant UINT256_MAX = type(uint256).max;

    constructor(
        //
        address CoreProxy_,
        address AccountProxy_,
        address TreasuryMarketProxy_,
        address LegacyMarketProxy_
    ) {
        CoreProxy = ICoreProxy(CoreProxy_);
        AccountProxy = IAccountProxy(AccountProxy_);
        TreasuryMarketProxy = ITreasuryMarketProxy(TreasuryMarketProxy_);
        LegacyMarketProxy = ILegacyMarketProxy(LegacyMarketProxy_);
        V2xResolver = IAddressResolver(LegacyMarketProxy.v2xResolver());
    }

    function getV2x() public view returns (address v2x) {
        v2x = V2xResolver.getAddress("Synthetix");
    }

    function getV2xUsd() public view returns (address v2xUsd) {
        v2xUsd = V2xResolver.getAddress("SynthsUSD");
    }

    function get$SNX() public view returns (address $SNX) {
        $SNX = V2xResolver.getAddress("ProxySynthetix");
    }

    function get$sUSD() public view returns (address $sUSD) {
        $sUSD = V2xResolver.getAddress("ProxysUSD");
    }

    function get$snxUSD() public view returns (address $snxUSD) {
        $snxUSD = CoreProxy.getUsdToken();
    }

    /**
     * @notice Retrieves the list of account IDs associated with the caller
     * @dev Uses the ERC2771Context to get the correct sender address for meta-transactions
     * @return accountIds An array containing all account IDs owned by the caller
     */
    function getAccounts() public view returns (uint128[] memory accountIds) {
        address msgSender = ERC2771Context._msgSender();
        uint256 numberOfAccountTokens = AccountProxy.balanceOf(msgSender);
        if (numberOfAccountTokens == 0) {
            return new uint128[](0);
        }
        accountIds = new uint128[](numberOfAccountTokens);
        for (uint256 i = 0; i < numberOfAccountTokens; i++) {
            // Retrieve the token/account ID at the index
            uint256 accountId = AccountProxy.tokenOfOwnerByIndex(
                //
                msgSender,
                i
            );
            accountIds[i] = uint128(accountId); // Downcast to uint128, assuming IDs fit within uint128
        }
        return accountIds;
    }

    /**
     * @notice Retrieves the total deposit amount of SNX collateral across all accounts owned by the caller
     * @dev Iterates through all accounts owned by the caller and sums up their collateral in the specified pool
     * @return totalDeposit The total amount of SNX collateral deposited across all caller-owned accounts
     */
    function getTotalDeposit() public view returns (uint256 totalDeposit) {
        uint128[] memory accountIds = getAccounts();
        totalDeposit = 0;
        uint128 poolId = TreasuryMarketProxy.poolId();
        address $SNX = get$SNX();
        for (uint256 i = 0; i < accountIds.length; i++) {
            totalDeposit = totalDeposit + CoreProxy.getPositionCollateral(accountIds[i], poolId, $SNX);
        }
    }

    /**
     * @notice Retrieves the total loan amount across all accounts owned by the caller
     * @dev Iterates through all accounts owned by the caller and sums up their loaned amounts
     * @return totalLoan The total loan amount across all caller-owned accounts
     */
    function getTotalLoan() public view returns (uint256 totalLoan) {
        uint128[] memory accountIds = getAccounts();
        totalLoan = 0;
        for (uint256 i = 0; i < accountIds.length; i++) {
            totalLoan = totalLoan + TreasuryMarketProxy.loanedAmount(accountIds[i]);
        }
    }

    /**
     * @notice Migrates the user's position from one pool to the Delegated Staking pool.
     * @dev This function transfers the account NFT temporarily to perform necessary actions such as
     * withdrawing snxUSD, migrating the position to the Delegated Staking pool, saddling the account with debt,
     * and finally returning the account NFT to the user's wallet.
     * It ensures all steps for migration are completed in a single transaction.
     * @param sourcePoolId The ID of the source pool from which the position is being migrated.
     * @param accountId The unique ID of the user's Synthetix v3 Account NFT.
     */
    function migratePosition(uint128 sourcePoolId, uint128 accountId) public {
        address msgSender = ERC2771Context._msgSender();
        address $SNX = get$SNX();
        address $snxUSD = get$snxUSD();

        // 1. Temporarily transfer Account NFT from the user wallet
        AccountProxy.transferFrom(
            //
            msgSender,
            address(this),
            uint256(accountId)
        );

        // 2. In case debt is negative we mint $snxUSD
        int256 debt = CoreProxy.getPositionDebt(accountId, sourcePoolId, $SNX);
        if (debt < 0) {
            CoreProxy.mintUsd(accountId, sourcePoolId, $SNX, uint256(-debt));
        }

        // 3. Withdraw any available $snxUSD
        _withdrawCollateral(accountId, $snxUSD);

        // 4. Migrate position to Delegated Staking pool and saddle account with debt
        CoreProxy.migrateDelegation(
            //
            accountId,
            sourcePoolId,
            $SNX,
            TreasuryMarketProxy.poolId()
        );
        TreasuryMarketProxy.saddle(accountId);

        // 5. Send account NFT back to the user wallet
        AccountProxy.transferFrom(
            //
            address(this),
            msgSender,
            uint256(accountId)
        );
    }

    /**
     * @notice Fully closes the user's position by repaying loans, withdrawing collateral, and transferring ownership of the account back to the user.
     * @dev The function ensures that the minimum delegation time is respected before proceeding.
     * Temporarily transfers the user's account NFT to perform necessary operations, such as
     * repaying outstanding loans, unsaddling the position, withdrawing all available $snxUSD and $SNX collateral,
     * and finally transferring the account NFT back to the user's wallet. It ensures all steps for closing a position are done in a single transaction.
     * @param accountId The unique ID of the user's Synthetix v3 Account NFT.
     */
    function closePosition(uint128 accountId) public {
        address msgSender = ERC2771Context._msgSender();
        address $SNX = get$SNX();
        address $snxUSD = get$snxUSD();

        // 1. Verify that minimum delegation time is respected
        uint128 poolId = TreasuryMarketProxy.poolId();
        uint32 lastDelegationTime = uint32(
            CoreProxy.getLastDelegationTime(
                //
                accountId,
                poolId,
                $SNX
            )
        );
        uint32 minDelegationTime = CoreProxy.getMarketMinDelegateTime(LegacyMarketProxy.marketId());
        if (lastDelegationTime + minDelegationTime > block.timestamp) {
            revert ICoreProxy.MinDelegationTimeoutPending(
                //
                poolId,
                (lastDelegationTime + minDelegationTime) - uint32(block.timestamp)
            );
        }

        // 2. Temporarily transfer Account NFT from the user wallet
        AccountProxy.transferFrom(
            //
            msgSender,
            address(this),
            uint256(accountId)
        );

        // 3. Repay outstanding loan (if needed)
        _repayLoan(accountId);

        // 4. Unsaddle account, TreasuryMarketProxy will close position on behalf
        AccountProxy.approve(address(TreasuryMarketProxy), accountId);
        TreasuryMarketProxy.unsaddle(accountId);

        // 5. Withdraw available $snxUSD
        _withdrawCollateral(accountId, $snxUSD);

        // 6. Withdraw available $SNX
        _withdrawCollateral(accountId, $SNX);

        // 7. Send Account NFT back to the user wallet
        AccountProxy.transferFrom(
            //
            address(this),
            msgSender,
            uint256(accountId)
        );
    }

    /**
     * @notice Withdraws the available amount of collateral for the given account and sends it to the caller's wallet.
     * @dev Ensures that any available collateral collateral is fully withdrawn and then directly transferred to the caller's wallet.
     *      The function checks the available collateral, withdraws the full amount, and transfers it to the wallet if the amount is greater than zero.
     * @param accountId The unique ID of the user's Synthetix v3 Account NFT.
     * @return availableCollateral The amount of collateral that was withdrawn and sent to the caller.
     */
    function _withdrawCollateral(uint128 accountId, address collateralType)
        internal
        returns (uint256 availableCollateral)
    {
        address msgSender = ERC2771Context._msgSender();

        // 1. Get amount of available collateral
        availableCollateral = CoreProxy.getAccountAvailableCollateral(
            //
            accountId,
            collateralType
        );
        if (availableCollateral > 0) {
            // 2. Withdraw all the available collateral
            CoreProxy.withdraw(
                //
                accountId,
                collateralType,
                availableCollateral
            );

            // 3. Send all the collateral to the wallet
            IERC20(collateralType).transfer(
                //
                msgSender,
                availableCollateral
            );
        }
    }

    /**
     * @notice Repays a portion or the full amount of a loan for the specified account using $sUSD from the caller's wallet and converts it to $snxUSD.
     * @dev The function performs the following steps:
     *      1. Verifies if the caller's wallet has enough transferable $sUSD.
     *      2. Ensures the caller's wallet has provided sufficient allowance to the contract.
     *      3. Transfers $sUSD from the caller's wallet to this contract.
     *      4. Approves the LegacyMarketProxy to spend $sUSD.
     *      5. Converts $sUSD to $snxUSD through the LegacyMarketProxy.
     *      6. Approves the TreasuryMarketProxy to spend $snxUSD.
     *      7. Repays the loan for the account by depositing $snxUSD into the TreasuryMarketProxy.
     *      If the `$sUSDAmount` provided is greater than the current loan amount, it automatically adjusts to repay only what's required.
     *      If the wallet doesn't have enough $sUSD or allowance, the function reverts with the appropriate error.
     * @param accountId The unique ID of the user's Synthetix account NFT.
     */
    function _repayLoan(uint128 accountId) internal {
        uint256 currentLoan = TreasuryMarketProxy.loanedAmount(accountId);
        if (currentLoan > 0) {
            address msgSender = ERC2771Context._msgSender();
            address $sUSD = get$sUSD();
            uint256 transferable$sUSDAmount = IV2xUsd(getV2xUsd()).transferableSynths(msgSender);
            uint256 repaymentPenalty = TreasuryMarketProxy.repaymentPenalty(accountId, 0);
            uint256 required$sUSDAmount = currentLoan + repaymentPenalty;

            // 1. Verify wallet has enough transferable $sUSD
            if (required$sUSDAmount > transferable$sUSDAmount) {
                revert NotEnoughBalance(
                    //
                    msgSender,
                    $sUSD,
                    required$sUSDAmount,
                    transferable$sUSDAmount
                );
            }

            // 2. Verify wallet has enough allowance to transfer $sUSD
            uint256 available$sUSDAllowance = IERC20($sUSD).allowance(
                //
                msgSender,
                address(this)
            );
            if (required$sUSDAmount > available$sUSDAllowance) {
                revert NotEnoughAllowance(
                    //
                    msgSender,
                    $sUSD,
                    required$sUSDAmount,
                    available$sUSDAllowance
                );
            }

            // 3. Transfer $sUSD from user wallet to PositionManager
            IERC20($sUSD).transferFrom(
                //
                msgSender,
                address(this),
                required$sUSDAmount
            );

            // 4. Allow LegacyMarketProxy to spend $sUSD
            IERC20($sUSD).approve(address(LegacyMarketProxy), required$sUSDAmount);

            // 5. Convert $sUSD to $snxUSD
            LegacyMarketProxy.convertUSD(required$sUSDAmount);

            // 6. Allow TreasuryMarketProxy to spend $snxUSD
            IERC20(get$snxUSD()).approve(address(TreasuryMarketProxy), required$sUSDAmount);

            // 7. Repay account loan (must have enough $sUSD that will be deposited to the Treasury Market)
            TreasuryMarketProxy.adjustLoan(
                //
                accountId,
                0
            );
        }
    }

    function onERC721Received(address, address, uint256, bytes calldata) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ClaimedEscrow = ContractEventLog<{
  liquidatee: string;
  market: string;
  id: string;
  0: string;
  1: string;
  2: string;
}>;
export type ClaimedReceipts = ContractEventLog<{
  liquidator: string;
  market: string;
  receiptId: string;
  0: string;
  1: string;
  2: string;
}>;
export type InvalidClaimOrder = ContractEventLog<{
  receiptId: string;
  0: string;
}>;
export type Liquidate = ContractEventLog<{
  account: string;
  liquidator: string;
  liquidationAmount: string;
  side: string;
  market: string;
  liquidationId: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface Liquidation extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Liquidation;
  clone(): Liquidation;
  methods: {
    calcAmountToReturn(
      escrowId: number | string | BN,
      orders: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ][],
      traderContract: string
    ): NonPayableTransactionObject<string>;

    calcUnitsSold(
      orders: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ][],
      traderContract: string,
      receiptId: number | string | BN
    ): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    checkPartialLiquidation(
      updatedPosition: [number | string | BN, number | string | BN],
      lastUpdatedGasPrice: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    claimEscrow(
      receiptId: number | string | BN
    ): NonPayableTransactionObject<void>;

    claimReceipt(
      receiptId: number | string | BN,
      orders: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ][],
      traderContract: string
    ): NonPayableTransactionObject<void>;

    currentLiquidationId(): NonPayableTransactionObject<string>;

    fastGasOracle(): NonPayableTransactionObject<string>;

    getLiquidationReceipt(
      id: number | string | BN
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        string,
        boolean
      ]
    >;

    insuranceContract(): NonPayableTransactionObject<string>;

    liquidate(
      amount: number | string | BN,
      account: string
    ): NonPayableTransactionObject<void>;

    liquidationReceipts(
      arg0: number | string | BN
    ): NonPayableTransactionObject<{
      tracer: string;
      liquidator: string;
      liquidatee: string;
      price: string;
      time: string;
      escrowedAmount: string;
      releaseTime: string;
      amountLiquidated: string;
      escrowClaimed: boolean;
      liquidationSide: string;
      liquidatorRefundClaimed: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: boolean;
      9: string;
      10: boolean;
    }>;

    maxSlippage(): NonPayableTransactionObject<string>;

    minimumLeftoverGasCostMultiplier(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    pricing(): NonPayableTransactionObject<string>;

    releaseTime(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setMaxSlippage(
      _maxSlippage: number | string | BN
    ): NonPayableTransactionObject<void>;

    setMinimumLeftoverGasCostMultiplier(
      _minimumLeftoverGasCostMultiplier: number | string | BN
    ): NonPayableTransactionObject<void>;

    setReleaseTime(
      _releaseTime: number | string | BN
    ): NonPayableTransactionObject<void>;

    tracer(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;
  };
  events: {
    ClaimedEscrow(cb?: Callback<ClaimedEscrow>): EventEmitter;
    ClaimedEscrow(
      options?: EventOptions,
      cb?: Callback<ClaimedEscrow>
    ): EventEmitter;

    ClaimedReceipts(cb?: Callback<ClaimedReceipts>): EventEmitter;
    ClaimedReceipts(
      options?: EventOptions,
      cb?: Callback<ClaimedReceipts>
    ): EventEmitter;

    InvalidClaimOrder(cb?: Callback<InvalidClaimOrder>): EventEmitter;
    InvalidClaimOrder(
      options?: EventOptions,
      cb?: Callback<InvalidClaimOrder>
    ): EventEmitter;

    Liquidate(cb?: Callback<Liquidate>): EventEmitter;
    Liquidate(options?: EventOptions, cb?: Callback<Liquidate>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ClaimedEscrow", cb: Callback<ClaimedEscrow>): void;
  once(
    event: "ClaimedEscrow",
    options: EventOptions,
    cb: Callback<ClaimedEscrow>
  ): void;

  once(event: "ClaimedReceipts", cb: Callback<ClaimedReceipts>): void;
  once(
    event: "ClaimedReceipts",
    options: EventOptions,
    cb: Callback<ClaimedReceipts>
  ): void;

  once(event: "InvalidClaimOrder", cb: Callback<InvalidClaimOrder>): void;
  once(
    event: "InvalidClaimOrder",
    options: EventOptions,
    cb: Callback<InvalidClaimOrder>
  ): void;

  once(event: "Liquidate", cb: Callback<Liquidate>): void;
  once(
    event: "Liquidate",
    options: EventOptions,
    cb: Callback<Liquidate>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}

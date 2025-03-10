/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TwabLib,
  TwabLibInterface,
} from "../../../../../@pooltogether/v4-core/contracts/libraries/TwabLib";

const _abi = [
  {
    inputs: [],
    name: "MAX_CARDINALITY",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608f610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80638200d873146038575b600080fd5b604162ffffff81565b60405162ffffff909116815260200160405180910390f3fea26469706673582212208460e08a6ac698d3ff7910b9593c93846bff6acc0a05380b24ca5419d07977c864736f6c63430008060033";

type TwabLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TwabLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TwabLib__factory extends ContractFactory {
  constructor(...args: TwabLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TwabLib> {
    return super.deploy(overrides || {}) as Promise<TwabLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TwabLib {
    return super.attach(address) as TwabLib;
  }
  override connect(signer: Signer): TwabLib__factory {
    return super.connect(signer) as TwabLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TwabLibInterface {
    return new utils.Interface(_abi) as TwabLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TwabLib {
    return new Contract(address, _abi, signerOrProvider) as TwabLib;
  }
}

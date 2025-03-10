/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TridentMathConsumerMock,
  TridentMathConsumerMockInterface,
} from "../TridentMathConsumerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "sqrt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610267806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063677342ce14610030575b600080fd5b61004361003e3660046101e9565b610055565b60405190815260200160405180910390f35b600061006082610066565b92915050565b60008161007557506000919050565b816001700100000000000000000000000000000000821061009b5760809190911c9060401b5b6801000000000000000082106100b65760409190911c9060201b5b64010000000082106100cd5760209190911c9060101b5b6201000082106100e25760109190911c9060081b5b61010082106100f65760089190911c9060041b5b601082106101095760049190911c9060021b5b600882106101155760011b5b600181858161012657610126610202565b048201901c9050600181858161013e5761013e610202565b048201901c9050600181858161015657610156610202565b048201901c9050600181858161016e5761016e610202565b048201901c9050600181858161018657610186610202565b048201901c9050600181858161019e5761019e610202565b048201901c905060018185816101b6576101b6610202565b048201901c905060008185816101ce576101ce610202565b0490508082106101de57806101e0565b815b95945050505050565b6000602082840312156101fb57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122063ee37a0f52f6d341e85c76d19d7d25b91a60229a09c36de367131a15790ac8864736f6c63430008070033";

export class TridentMathConsumerMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TridentMathConsumerMock> {
    return super.deploy(overrides || {}) as Promise<TridentMathConsumerMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TridentMathConsumerMock {
    return super.attach(address) as TridentMathConsumerMock;
  }
  connect(signer: Signer): TridentMathConsumerMock__factory {
    return super.connect(signer) as TridentMathConsumerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TridentMathConsumerMockInterface {
    return new utils.Interface(_abi) as TridentMathConsumerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TridentMathConsumerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TridentMathConsumerMock;
  }
}

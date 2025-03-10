/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStrategy,
  IStrategyInterface,
} from "../../../contracts/interfaces/IStrategy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPrizeCaptured",
        type: "uint256",
      },
    ],
    name: "Distributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prizeAwarded",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IControlledToken",
        name: "token",
        type: "address",
      },
    ],
    name: "PrizeSplitAwarded",
    type: "event",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStrategy__factory {
  static readonly abi = _abi;
  static createInterface(): IStrategyInterface {
    return new utils.Interface(_abi) as IStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStrategy {
    return new Contract(address, _abi, signerOrProvider) as IStrategy;
  }
}

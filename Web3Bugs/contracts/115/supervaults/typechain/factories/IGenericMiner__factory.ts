/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGenericMiner, IGenericMinerInterface } from "../IGenericMiner";

const _abi = [
  {
    inputs: [],
    name: "a",
    outputs: [
      {
        internalType: "contract IGovernanceAddressProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "releaseMIMO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGenericMiner__factory {
  static readonly abi = _abi;
  static createInterface(): IGenericMinerInterface {
    return new utils.Interface(_abi) as IGenericMinerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGenericMiner {
    return new Contract(address, _abi, signerOrProvider) as IGenericMiner;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGovernanceAddressProvider,
  IGovernanceAddressProviderInterface,
} from "../IGovernanceAddressProvider";

const _abi = [
  {
    inputs: [],
    name: "mimo",
    outputs: [
      {
        internalType: "contract IMIMO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGovernanceAddressProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernanceAddressProviderInterface {
    return new utils.Interface(_abi) as IGovernanceAddressProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGovernanceAddressProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGovernanceAddressProvider;
  }
}

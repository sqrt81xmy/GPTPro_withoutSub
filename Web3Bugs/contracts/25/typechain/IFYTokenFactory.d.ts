/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IFYTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createFYToken(bytes6,address,address,uint32,string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createFYToken",
    values: [BytesLike, string, string, BigNumberish, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createFYToken",
    data: BytesLike
  ): Result;

  events: {
    "FYTokenCreated(address,address,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FYTokenCreated"): EventFragment;
}

export class IFYTokenFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: IFYTokenFactoryInterface;

  functions: {
    createFYToken(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createFYToken(bytes6,address,address,uint32,string,string)"(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  createFYToken(
    baseId: BytesLike,
    oracle: string,
    baseJoin: string,
    maturity: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createFYToken(bytes6,address,address,uint32,string,string)"(
    baseId: BytesLike,
    oracle: string,
    baseJoin: string,
    maturity: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    createFYToken(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createFYToken(bytes6,address,address,uint32,string,string)"(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    FYTokenCreated(
      fyToken: string | null,
      asset: string | null,
      maturity: BigNumberish | null
    ): TypedEventFilter<
      [string, string, number],
      { fyToken: string; asset: string; maturity: number }
    >;
  };

  estimateGas: {
    createFYToken(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createFYToken(bytes6,address,address,uint32,string,string)"(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createFYToken(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createFYToken(bytes6,address,address,uint32,string,string)"(
      baseId: BytesLike,
      oracle: string,
      baseJoin: string,
      maturity: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

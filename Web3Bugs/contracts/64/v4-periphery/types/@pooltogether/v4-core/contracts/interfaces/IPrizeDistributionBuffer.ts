/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace IPrizeDistributionSource {
  export type PrizeDistributionStruct = {
    bitRangeSize: PromiseOrValue<BigNumberish>;
    matchCardinality: PromiseOrValue<BigNumberish>;
    startTimestampOffset: PromiseOrValue<BigNumberish>;
    endTimestampOffset: PromiseOrValue<BigNumberish>;
    maxPicksPerUser: PromiseOrValue<BigNumberish>;
    expiryDuration: PromiseOrValue<BigNumberish>;
    numberOfPicks: PromiseOrValue<BigNumberish>;
    tiers: PromiseOrValue<BigNumberish>[];
    prize: PromiseOrValue<BigNumberish>;
  };

  export type PrizeDistributionStructOutput = [
    number,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    number[],
    BigNumber
  ] & {
    bitRangeSize: number;
    matchCardinality: number;
    startTimestampOffset: number;
    endTimestampOffset: number;
    maxPicksPerUser: number;
    expiryDuration: number;
    numberOfPicks: BigNumber;
    tiers: number[];
    prize: BigNumber;
  };
}

export interface IPrizeDistributionBufferInterface extends utils.Interface {
  functions: {
    "getBufferCardinality()": FunctionFragment;
    "getNewestPrizeDistribution()": FunctionFragment;
    "getOldestPrizeDistribution()": FunctionFragment;
    "getPrizeDistribution(uint32)": FunctionFragment;
    "getPrizeDistributionCount()": FunctionFragment;
    "getPrizeDistributions(uint32[])": FunctionFragment;
    "pushPrizeDistribution(uint32,(uint8,uint8,uint32,uint32,uint32,uint32,uint104,uint32[16],uint256))": FunctionFragment;
    "setPrizeDistribution(uint32,(uint8,uint8,uint32,uint32,uint32,uint32,uint104,uint32[16],uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBufferCardinality"
      | "getNewestPrizeDistribution"
      | "getOldestPrizeDistribution"
      | "getPrizeDistribution"
      | "getPrizeDistributionCount"
      | "getPrizeDistributions"
      | "pushPrizeDistribution"
      | "setPrizeDistribution"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBufferCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNewestPrizeDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOldestPrizeDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrizeDistribution",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrizeDistributionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrizeDistributions",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "pushPrizeDistribution",
    values: [
      PromiseOrValue<BigNumberish>,
      IPrizeDistributionSource.PrizeDistributionStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrizeDistribution",
    values: [
      PromiseOrValue<BigNumberish>,
      IPrizeDistributionSource.PrizeDistributionStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBufferCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewestPrizeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOldestPrizeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrizeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrizeDistributionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrizeDistributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushPrizeDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrizeDistribution",
    data: BytesLike
  ): Result;

  events: {
    "PrizeDistributionSet(uint32,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PrizeDistributionSet"): EventFragment;
}

export interface PrizeDistributionSetEventObject {
  drawId: number;
  prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
}
export type PrizeDistributionSetEvent = TypedEvent<
  [number, IPrizeDistributionSource.PrizeDistributionStructOutput],
  PrizeDistributionSetEventObject
>;

export type PrizeDistributionSetEventFilter =
  TypedEventFilter<PrizeDistributionSetEvent>;

export interface IPrizeDistributionBuffer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPrizeDistributionBufferInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBufferCardinality(overrides?: CallOverrides): Promise<[number]>;

    getNewestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
        prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
        drawId: number;
      }
    >;

    getOldestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
        prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
        drawId: number;
      }
    >;

    getPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IPrizeDistributionSource.PrizeDistributionStructOutput]>;

    getPrizeDistributionCount(overrides?: CallOverrides): Promise<[number]>;

    getPrizeDistributions(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IPrizeDistributionSource.PrizeDistributionStructOutput[]]>;

    pushPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      draw: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getBufferCardinality(overrides?: CallOverrides): Promise<number>;

  getNewestPrizeDistribution(
    overrides?: CallOverrides
  ): Promise<
    [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
      drawId: number;
    }
  >;

  getOldestPrizeDistribution(
    overrides?: CallOverrides
  ): Promise<
    [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
      drawId: number;
    }
  >;

  getPrizeDistribution(
    drawId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPrizeDistributionSource.PrizeDistributionStructOutput>;

  getPrizeDistributionCount(overrides?: CallOverrides): Promise<number>;

  getPrizeDistributions(
    drawIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IPrizeDistributionSource.PrizeDistributionStructOutput[]>;

  pushPrizeDistribution(
    drawId: PromiseOrValue<BigNumberish>,
    prizeDistribution: IPrizeDistributionSource.PrizeDistributionStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPrizeDistribution(
    drawId: PromiseOrValue<BigNumberish>,
    draw: IPrizeDistributionSource.PrizeDistributionStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBufferCardinality(overrides?: CallOverrides): Promise<number>;

    getNewestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
        prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
        drawId: number;
      }
    >;

    getOldestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<
      [IPrizeDistributionSource.PrizeDistributionStructOutput, number] & {
        prizeDistribution: IPrizeDistributionSource.PrizeDistributionStructOutput;
        drawId: number;
      }
    >;

    getPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPrizeDistributionSource.PrizeDistributionStructOutput>;

    getPrizeDistributionCount(overrides?: CallOverrides): Promise<number>;

    getPrizeDistributions(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IPrizeDistributionSource.PrizeDistributionStructOutput[]>;

    pushPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      draw: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    "PrizeDistributionSet(uint32,tuple)"(
      drawId?: PromiseOrValue<BigNumberish> | null,
      prizeDistribution?: null
    ): PrizeDistributionSetEventFilter;
    PrizeDistributionSet(
      drawId?: PromiseOrValue<BigNumberish> | null,
      prizeDistribution?: null
    ): PrizeDistributionSetEventFilter;
  };

  estimateGas: {
    getBufferCardinality(overrides?: CallOverrides): Promise<BigNumber>;

    getNewestPrizeDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    getOldestPrizeDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    getPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrizeDistributionCount(overrides?: CallOverrides): Promise<BigNumber>;

    getPrizeDistributions(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pushPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      draw: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBufferCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNewestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOldestPrizeDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrizeDistributionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrizeDistributions(
      drawIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pushPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      prizeDistribution: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPrizeDistribution(
      drawId: PromiseOrValue<BigNumberish>,
      draw: IPrizeDistributionSource.PrizeDistributionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

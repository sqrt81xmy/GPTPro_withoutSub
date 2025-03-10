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

export interface ITrader extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ITrader;
  clone(): ITrader;
  methods: {
    EIP712_DOMAIN(): NonPayableTransactionObject<string>;

    averageExecutionPrice(
      arg0: string | number[]
    ): NonPayableTransactionObject<string>;

    chainId(): NonPayableTransactionObject<string>;

    executeTrade(
      makers: [
        [
          string,
          string,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN
        ],
        string | number[],
        string | number[],
        number | string | BN
      ][],
      takers: [
        [
          string,
          string,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN
        ],
        string | number[],
        string | number[],
        number | string | BN
      ][]
    ): NonPayableTransactionObject<void>;

    filled(arg0: string | number[]): NonPayableTransactionObject<string>;

    filledAmount(
      order: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<string>;

    getAverageExecutionPrice(
      order: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<string>;

    getDomain(): NonPayableTransactionObject<string>;

    getOrder(
      order: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<
      [string, string, string, string, string, string, string]
    >;

    hashOrder(
      order: [
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<string>;

    verifySignature(
      signer: string,
      order: [
        [
          string,
          string,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN
        ],
        string | number[],
        string | number[],
        number | string | BN
      ]
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}

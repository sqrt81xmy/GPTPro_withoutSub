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

export interface LibBalancesMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): LibBalancesMock;
  clone(): LibBalancesMock;
  methods: {
    applyTrade(
      position: [number | string | BN, number | string | BN],
      trade: [number | string | BN, number | string | BN, number | string | BN],
      feeRate: number | string | BN
    ): NonPayableTransactionObject<[string, string]>;

    leveragedNotionalValue(
      position: [number | string | BN, number | string | BN],
      price: number | string | BN
    ): NonPayableTransactionObject<string>;

    margin(
      position: [number | string | BN, number | string | BN],
      price: number | string | BN
    ): NonPayableTransactionObject<string>;

    marginIsValid(
      position: [number | string | BN, number | string | BN],
      gasCost: number | string | BN,
      price: number | string | BN,
      trueMaxLeverage: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    minimumMargin(
      position: [number | string | BN, number | string | BN],
      price: number | string | BN,
      liquidationGasCost: number | string | BN,
      maximumLeverage: number | string | BN
    ): NonPayableTransactionObject<string>;

    notionalValue(
      position: [number | string | BN, number | string | BN],
      price: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenToWad(
      tokenDecimals: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<string>;

    wadToToken(
      tokenDecimals: number | string | BN,
      wadAmount: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}

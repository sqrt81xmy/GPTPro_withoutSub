/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PrizeDistributionBuffer,
  PrizeDistributionBufferInterface,
} from "../../../../@pooltogether/v4-core/contracts/PrizeDistributionBuffer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_cardinality",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "cardinality",
        type: "uint8",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newManager",
        type: "address",
      },
    ],
    name: "ManagerTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnershipOffered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "prizeDistribution",
        type: "tuple",
      },
    ],
    name: "PrizeDistributionSet",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBufferCardinality",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNewestPrizeDistribution",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "prizeDistribution",
        type: "tuple",
      },
      {
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOldestPrizeDistribution",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "prizeDistribution",
        type: "tuple",
      },
      {
        internalType: "uint32",
        name: "drawId",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_drawId",
        type: "uint32",
      },
    ],
    name: "getPrizeDistribution",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrizeDistributionCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_drawIds",
        type: "uint32[]",
      },
    ],
    name: "getPrizeDistributions",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint32",
        name: "_drawId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "_prizeDistribution",
        type: "tuple",
      },
    ],
    name: "pushPrizeDistribution",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newManager",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_drawId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "bitRangeSize",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "matchCardinality",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "startTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimestampOffset",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxPicksPerUser",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expiryDuration",
            type: "uint32",
          },
          {
            internalType: "uint104",
            name: "numberOfPicks",
            type: "uint104",
          },
          {
            internalType: "uint32[16]",
            name: "tiers",
            type: "uint32[16]",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        internalType: "struct IPrizeDistributionSource.PrizeDistribution",
        name: "_prizeDistribution",
        type: "tuple",
      },
    ],
    name: "setPrizeDistribution",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020b2380380620020b28339810160408190526200003491620000f2565b816200004081620000a2565b50610403805463ffffffff60401b191660ff8316680100000000000000008102919091179091556040519081527f7da7688769fade6088b3de366e63c95090bc5b0db6e9b43f043dee741d7544fe9060200160405180910390a1505062000141565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156200010657600080fd5b82516001600160a01b03811681146200011e57600080fd5b602084015190925060ff811681146200013657600080fd5b809150509250929050565b611f6180620001516000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063d0ebdbe711610066578063d0ebdbe7146101f3578063d30a5daf14610206578063e30c397814610226578063f2fde38b1461023757600080fd5b8063715018a6146101ac5780638da5cb5b146101b4578063caeef7ec146101c5578063ce336ce9146101e057600080fd5b806324c21446116100d357806324c21446146101555780633cd8e2d51461015d578063481c6a751461017d5780634e71e0c8146101a257600080fd5b80631124e1dc146100fa57806321e98ad9146101225780632439093a1461013f575b600080fd5b61010d610108366004611822565b61024a565b60405190151581526020015b60405180910390f35b61012a610317565b60405163ffffffff9091168152602001610119565b61014761039e565b604051610119929190611adb565b610147610671565b61017061016b366004611805565b610804565b6040516101199190611acc565b6002546001600160a01b03165b6040516001600160a01b039091168152602001610119565b6101aa610852565b005b6101aa6108e0565b6000546001600160a01b031661018a565b6104035468010000000000000000900463ffffffff1661012a565b61012a6101ee366004611822565b610955565b61010d610201366004611760565b610a84565b610219610214366004611790565b610afd565b60405161011991906119b9565b6001546001600160a01b031661018a565b6101aa610245366004611760565b610c08565b60003361025f6002546001600160a01b031690565b6001600160a01b0316148061028d5750336102826000546001600160a01b031690565b6001600160a01b0316145b6103045760405162461bcd60e51b815260206004820152602660248201527f4d616e61676561626c652f63616c6c65722d6e6f742d6d616e616765722d6f7260448201527f2d6f776e6572000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61030e8383610d44565b90505b92915050565b604080516060810182526104035463ffffffff80821680845264010000000083048216602085015268010000000000000000909204169282019290925260009161036357600091505090565b6020810151600363ffffffff8216610100811061038257610382611c7d565b6004020154610100900460ff1615610311575060400151919050565b6103a66116cd565b604080516060810182526104035463ffffffff8082168352640100000000820481166020840181905268010000000000000000909204169282019290925260009160039061010081106103fb576103fb611c7d565b604080516101208101825260049290920292909201805460ff8082168452610100820416602084015262010000810463ffffffff9081168486015266010000000000008204811660608501526a01000000000000000000008204811660808501526e01000000000000000000000000000082041660a0840152720100000000000000000000000000000000000090046cffffffffffffffffffffffffff1660c083015282516102008101938490529192909160e08401916001840190601090826000855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116104bf5750505092845250505060039190910154602090910152815190935063ffffffff166105275760009150509091565b825160ff1661065f5760408051610120810182526003805460ff8082168452610100820416602084015263ffffffff62010000820481168486015266010000000000008204811660608501526a01000000000000000000008204811660808501526e01000000000000000000000000000082041660a08401526cffffffffffffffffffffffffff72010000000000000000000000000000000000009091041660c083015282516102008101938490529192909160e0840191600490601090826000855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116105ea575050509284525050506003919091015460209182015282015182519194509061064e906001611b16565b6106589190611b76565b9150509091565b6040810151815161064e906001611b16565b6106796116cd565b604080516060810182526104035463ffffffff808216808452640100000000830482166020850152680100000000000000009092048116938301939093526000926003916106ca9184919061119916565b63ffffffff1661010081106106e1576106e1611c7d565b8251604080516101208101825260049390930293909301805460ff8082168552610100820416602085015262010000810463ffffffff9081168587015266010000000000008204811660608601526a01000000000000000000008204811660808601526e01000000000000000000000000000082041660a0850152720100000000000000000000000000000000000090046cffffffffffffffffffffffffff1660c084015283516102008101948590529093919291849160e08401916001840190601090826000855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116107aa57905050505050508152602001600382015481525050915092509250509091565b61080c6116cd565b604080516060810182526104035463ffffffff808216835264010000000082048116602084015268010000000000000000909104169181019190915261031190836112c9565b6001546001600160a01b031633146108ac5760405162461bcd60e51b815260206004820152601f60248201527f4f776e61626c652f63616c6c65722d6e6f742d70656e64696e674f776e65720060448201526064016102fb565b6001546108c1906001600160a01b031661140f565b6001805473ffffffffffffffffffffffffffffffffffffffff19169055565b336108f36000546001600160a01b031690565b6001600160a01b0316146109495760405162461bcd60e51b815260206004820152601860248201527f4f776e61626c652f63616c6c65722d6e6f742d6f776e6572000000000000000060448201526064016102fb565b610953600061140f565b565b60003361096a6000546001600160a01b031690565b6001600160a01b0316146109c05760405162461bcd60e51b815260206004820152601860248201527f4f776e61626c652f63616c6c65722d6e6f742d6f776e6572000000000000000060448201526064016102fb565b604080516060810182526104035463ffffffff80821683526401000000008204811660208401526801000000000000000090910481169282019290925290600090610a0f908390879061119916565b90508360038263ffffffff166101008110610a2c57610a2c611c7d565b60040201610a3a8282611cc3565b9050508463ffffffff167f2d81da839b2f3db2ed762907f74df3acecdc30461dba4813694c225ba911e1f685604051610a739190611a08565b60405180910390a250929392505050565b600033610a996000546001600160a01b031690565b6001600160a01b031614610aef5760405162461bcd60e51b815260206004820152601860248201527f4f776e61626c652f63616c6c65722d6e6f742d6f776e6572000000000000000060448201526064016102fb565b6103118261146c565b919050565b60408051606081810183526104035463ffffffff8082168452640100000000820481166020850152680100000000000000009091041692820192909252829060008267ffffffffffffffff811115610b5757610b57611c93565b604051908082528060200260200182016040528015610b9057816020015b610b7d6116cd565b815260200190600190039081610b755790505b50905060005b83811015610bfe57610bce83888884818110610bb457610bb4611c7d565b9050602002016020810190610bc99190611805565b6112c9565b828281518110610be057610be0611c7d565b60200260200101819052508080610bf690611c04565b915050610b96565b5095945050505050565b33610c1b6000546001600160a01b031690565b6001600160a01b031614610c715760405162461bcd60e51b815260206004820152601860248201527f4f776e61626c652f63616c6c65722d6e6f742d6f776e6572000000000000000060448201526064016102fb565b6001600160a01b038116610ced5760405162461bcd60e51b815260206004820152602560248201527f4f776e61626c652f70656e64696e674f776e65722d6e6f742d7a65726f2d616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016102fb565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f239a2ddded15777fa246aed5f7e1a9bc69a39d4eb4a397034d1d85766cca7d4c90600090a250565b6000808363ffffffff1611610d9b5760405162461bcd60e51b815260206004820152601560248201527f4472617743616c632f647261772d69642d67742d30000000000000000000000060448201526064016102fb565b6000610dad6040840160208501611883565b60ff1611610dfd5760405162461bcd60e51b815260206004820152601e60248201527f4472617743616c632f6d6174636843617264696e616c6974792d67742d30000060448201526064016102fb565b610e0d6040830160208401611883565b610e1c9060ff16610100611b3e565b61ffff16610e2d6020840184611883565b60ff161115610e7e5760405162461bcd60e51b815260206004820152601f60248201527f4472617743616c632f62697452616e676553697a652d746f6f2d6c617267650060448201526064016102fb565b6000610e8d6020840184611883565b60ff1611610edd5760405162461bcd60e51b815260206004820152601a60248201527f4472617743616c632f62697452616e676553697a652d67742d3000000000000060448201526064016102fb565b6000610eef60a0840160808501611805565b63ffffffff1611610f425760405162461bcd60e51b815260206004820152601d60248201527f4472617743616c632f6d61785069636b73506572557365722d67742d3000000060448201526064016102fb565b6000610f5460c0840160a08501611805565b63ffffffff1611610fa75760405162461bcd60e51b815260206004820152601c60248201527f4472617743616c632f6578706972794475726174696f6e2d67742d300000000060448201526064016102fb565b60006010815b818110156110075760008560e0018260108110610fcc57610fcc611c7d565b602002016020810190610fdf9190611805565b63ffffffff169050610ff18185611afe565b9350508080610fff90611c04565b915050610fad565b50633b9aca0082111561105c5760405162461bcd60e51b815260206004820152601660248201527f4472617743616c632f74696572732d67742d313030250000000000000000000060448201526064016102fb565b604080516060810182526104035463ffffffff8082168352640100000000820481166020840181905268010000000000000000909204169282019290925290859060039061010081106110b1576110b1611c7d565b600402016110bf8282611cc3565b506110cc90508187611558565b80516104038054602084015160409485015163ffffffff90811668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff928216640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009094169582169590951792909217169290921790559051908716907f2d81da839b2f3db2ed762907f74df3acecdc30461dba4813694c225ba911e1f690611185908890611a08565b60405180910390a250600195945050505050565b60006111a483611643565b80156111c05750826000015163ffffffff168263ffffffff1611155b61120c5760405162461bcd60e51b815260206004820152600f60248201527f4452422f6675747572652d64726177000000000000000000000000000000000060448201526064016102fb565b825160009061121c908490611b76565b9050836040015163ffffffff168163ffffffff161061127d5760405162461bcd60e51b815260206004820152601060248201527f4452422f657870697265642d647261770000000000000000000000000000000060448201526064016102fb565b600061129d856020015163ffffffff16866040015163ffffffff1661166b565b90506112c08163ffffffff168363ffffffff16876040015163ffffffff16611699565b95945050505050565b6112d16116cd565b60036112dd8484611199565b63ffffffff1661010081106112f4576112f4611c7d565b604080516101208101825260049290920292909201805460ff8082168452610100820416602084015262010000810463ffffffff9081168486015266010000000000008204811660608501526a01000000000000000000008204811660808501526e01000000000000000000000000000082041660a0840152720100000000000000000000000000000000000090046cffffffffffffffffffffffffff1660c083015282516102008101938490529192909160e08401916001840190601090826000855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116113b857905050505050508152602001600382015481525050905092915050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002546000906001600160a01b039081169083168114156114f55760405162461bcd60e51b815260206004820152602360248201527f4d616e61676561626c652f6578697374696e672d6d616e616765722d6164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016102fb565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0385811691821790925560405190918316907f9cb45c728de594dab506a1f1a8554e24c8eeaf983618d5ec5dd7bc6f3c49feee90600090a350600192915050565b604080516060810182526000808252602082018190529181019190915261157e83611643565b15806115a157508251611592906001611b16565b63ffffffff168263ffffffff16145b6115ed5760405162461bcd60e51b815260206004820152601260248201527f4452422f6d7573742d62652d636f6e746967000000000000000000000000000060448201526064016102fb565b60405180606001604052808363ffffffff168152602001611622856020015163ffffffff16866040015163ffffffff166116b1565b63ffffffff168152602001846040015163ffffffff16815250905092915050565b6000816020015163ffffffff1660001480156116645750815163ffffffff16155b1592915050565b60008161167a57506000610311565b61030e60016116898486611afe565b6116939190611b5f565b836116c1565b60006116a9836116898487611afe565b949350505050565b600061030e611693846001611afe565b600061030e8284611c3d565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e08101611713611720565b8152602001600081525090565b6040518061020001604052806010906020820280368337509192915050565b8035610af881611eec565b8035610af881611f0a565b8035610af881611f1c565b60006020828403121561177257600080fd5b81356001600160a01b038116811461178957600080fd5b9392505050565b600080602083850312156117a357600080fd5b823567ffffffffffffffff808211156117bb57600080fd5b818501915085601f8301126117cf57600080fd5b8135818111156117de57600080fd5b8660208260051b85010111156117f357600080fd5b60209290920196919550909350505050565b60006020828403121561181757600080fd5b813561178981611f0a565b60008082840361032081121561183757600080fd5b833561184281611f0a565b92506103007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561187557600080fd5b506020830190509250929050565b60006020828403121561189557600080fd5b813561178981611f1c565b8060005b60108110156118d35781356118b881611f0a565b63ffffffff16845260209384019391909101906001016118a4565b50505050565b8060005b60108110156118d357815163ffffffff168452602093840193909101906001016118dd565b60ff815116825260ff6020820151166020830152604081015161192d604084018263ffffffff169052565b506060810151611945606084018263ffffffff169052565b50608081015161195d608084018263ffffffff169052565b5060a081015161197560a084018263ffffffff169052565b5060c081015161199660c08401826cffffffffffffffffffffffffff169052565b5060e08101516119a960e08401826118d9565b5061010001516102e09190910152565b6020808252825182820181905260009190848201906040850190845b818110156119fc576119e8838551611902565b9284019261030092909201916001016119d5565b50909695505050505050565b61030081018235611a1881611f1c565b60ff168252611a2960208401611755565b60ff166020830152611a3d6040840161174a565b63ffffffff166040830152611a546060840161174a565b63ffffffff166060830152611a6b6080840161174a565b63ffffffff166080830152611a8260a0840161174a565b63ffffffff1660a0830152611a9960c0840161173f565b6cffffffffffffffffffffffffff1660c0830152611abd60e08084019085016118a0565b6102e092830135919092015290565b61030081016103118284611902565b6103208101611aea8285611902565b63ffffffff83166103008301529392505050565b60008219821115611b1157611b11611c51565b500190565b600063ffffffff808316818516808303821115611b3557611b35611c51565b01949350505050565b600061ffff80841680611b5357611b53611c67565b92169190910492915050565b600082821015611b7157611b71611c51565b500390565b600063ffffffff83811690831681811015611b9357611b93611c51565b039392505050565b81816000805b6010811015611bfc578335611bb581611f0a565b835463ffffffff600385901b81811b801990931693909116901b1617835560209390930192600490910190601c821115611bf457600091506001830192505b600101611ba1565b505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c3657611c36611c51565b5060010190565b600082611c4c57611c4c611c67565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6000813561031181611eec565b6000813561031181611f0a565b8135611cce81611f1c565b60ff811690508154817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082161783556020840135611d0b81611f1c565b61ff008160081b16837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000841617178455505050611d84611d4d60408401611cb6565b82547fffffffffffffffffffffffffffffffffffffffffffffffffffff00000000ffff1660109190911b65ffffffff000016178255565b611dce611d9360608401611cb6565b82547fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff1660309190911b69ffffffff00000000000016178255565b611e1c611ddd60808401611cb6565b82547fffffffffffffffffffffffffffffffffffff00000000ffffffffffffffffffff1660509190911b6dffffffff0000000000000000000016178255565b611e6e611e2b60a08401611cb6565b82547fffffffffffffffffffffffffffff00000000ffffffffffffffffffffffffffff1660709190911b71ffffffff000000000000000000000000000016178255565b611ecd611e7d60c08401611ca9565b82547fff00000000000000000000000000ffffffffffffffffffffffffffffffffffff1660909190911b7effffffffffffffffffffffffff00000000000000000000000000000000000016178255565b611edd60e0830160018301611b9b565b6102e082013560038201555050565b6cffffffffffffffffffffffffff81168114611f0757600080fd5b50565b63ffffffff81168114611f0757600080fd5b60ff81168114611f0757600080fdfea2646970667358221220fe58078264c23fea006f3d81d198ad1419ad3f3722ad066dc6c72656a468d64564736f6c63430008060033";

type PrizeDistributionBufferConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrizeDistributionBufferConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrizeDistributionBuffer__factory extends ContractFactory {
  constructor(...args: PrizeDistributionBufferConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _cardinality: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PrizeDistributionBuffer> {
    return super.deploy(
      _owner,
      _cardinality,
      overrides || {}
    ) as Promise<PrizeDistributionBuffer>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _cardinality: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _cardinality, overrides || {});
  }
  override attach(address: string): PrizeDistributionBuffer {
    return super.attach(address) as PrizeDistributionBuffer;
  }
  override connect(signer: Signer): PrizeDistributionBuffer__factory {
    return super.connect(signer) as PrizeDistributionBuffer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrizeDistributionBufferInterface {
    return new utils.Interface(_abi) as PrizeDistributionBufferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrizeDistributionBuffer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PrizeDistributionBuffer;
  }
}

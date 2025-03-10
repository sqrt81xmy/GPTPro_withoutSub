/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Controller, ControllerInterface } from "../Controller";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_jpeg",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STRATEGIST_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "approveStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
    ],
    name: "approvedStrategies",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "balanceOfJPEG",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "earn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAddress",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "inCaseStrategyTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jpeg",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "revokeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "setFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "setStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "strategies",
    outputs: [
      {
        internalType: "contract IStrategy",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "vaults",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawJPEG",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620023af380380620023af8339810160408190526200003491620003f5565b6200004160003362000063565b6200004c8162000073565b5060601b6001600160601b0319166080526200072a565b6200006f8282620000df565b5050565b60006200008a816200008462000169565b6200016d565b6001600160a01b038216620000bc5760405162461bcd60e51b8152600401620000b390620005ec565b60405180910390fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055565b620000eb8282620001f0565b6200006f576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200012562000169565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b3390565b620001798282620001f0565b6200006f576200019f816001600160a01b031660146200021b60201b62000df71760201c565b620001b583602062000df76200021b821b17811c565b604051602001620001c892919062000589565b60408051601f198184030181529082905262461bcd60e51b8252620000b391600401620005c7565b6000828152602081815260408083206001600160a01b038516845290915290205460ff165b92915050565b606060006200022c83600262000645565b6200023990600262000610565b6001600160401b038111156200025f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156200028a576020820181803683370190505b509050600360fc1b81600081518110620002b457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110620002f257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006200031884600262000645565b6200032590600162000610565b90505b6001811115620003bf576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106200036957634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106200038e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93620003b781620006c9565b905062000328565b508315620003e15760405162461bcd60e51b8152600401620000b390620005da565b9392505050565b8051620002158162000710565b600080604083850312156200040957600080fd5b6000620004178585620003e8565b92505060206200042a85828601620003e8565b9150509250929050565b60006200044182620005fe565b6200044d818562000602565b93506200045f81856020860162000696565b6200046a8162000706565b9093019392505050565b60006200048182620005fe565b6200048d81856200060b565b93506200049f81856020860162000696565b9290920192915050565b6000620004b860208362000602565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74815260200192915050565b6000620004f36017836200060b565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260170192915050565b60006200052e6011836200060b565b7001034b99036b4b9b9b4b733903937b6329607d1b815260110192915050565b60006200055d60138362000602565b7f494e56414c49445f4645455f4144445245535300000000000000000000000000815260200192915050565b60006200059682620004e4565b9150620005a4828562000474565b9150620005b1826200051f565b9150620005bf828462000474565b949350505050565b60208082528101620003e1818462000434565b602080825281016200021581620004a9565b6020808252810162000215816200054e565b5190565b90815260200190565b919050565b60006200061d8262000693565b91506200062a8362000693565b92508219821115620006405762000640620006f0565b500190565b6000620006528262000693565b91506200065f8362000693565b92508160001904831182151516156200067c576200067c620006f0565b500290565b60006001600160a01b03821662000215565b90565b60005b83811015620006b357818101518382015260200162000699565b83811115620006c3576000848401525b50505050565b6000620006d68262000693565b915081620006e857620006e8620006f0565b506000190190565b634e487b7160e01b600052601160045260246000fd5b601f01601f191690565b6200071b8162000681565b81146200072757600080fd5b50565b60805160601c611c5f62000750600039600081816108d00152610c750152611c5f6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806391d14854116100ee578063c494448e11610097578063e028697711610071578063e028697714610373578063eb88d91a14610386578063f3fef3a31461038e578063fa09e630146103a1576101ae565b8063c494448e1461033a578063c6d758cb1461034d578063d547741f14610360576101ae565b8063a378a324116100c8578063a378a3241461030c578063a622ee7c14610314578063b02bf4b914610327576101ae565b806391d14854146102de578063a1578b6a146102f1578063a217fddf14610304576101ae565b806339ebf8231161015b57806370a082311161013557806370a0823114610292578063714ccf7b146102a557806372cb5d97146102b85780638705fcd4146102cb576101ae565b806339ebf8231461024a578063412753581461026a578063590bbb601461027f576101ae565b80632f2ff15d1161018c5780632f2ff15d14610211578063353a9bd01461022457806336568abe14610237576101ae565b806301ffc9a7146101b3578063208a0c86146101dc578063248a9ca3146101f1575b600080fd5b6101c66101c1366004611478565b6103b4565b6040516101d391906119d5565b60405180910390f35b6101ef6101ea3660046114b4565b6103f8565b005b6102046101ff366004611420565b61048d565b6040516101d391906119e3565b6101ef61021f36600461143e565b6104a2565b610204610232366004611496565b6104c6565b6101ef61024536600461143e565b610569565b61025d610258366004611496565b6105b8565b6040516101d391906119f1565b6102726105d3565b6040516101d391906119ac565b6101ef61028d3660046114d3565b6105e2565b6102046102a0366004611496565b61066e565b6101ef6102b33660046114b4565b6106d9565b6101ef6102c63660046114d3565b6107a0565b6101ef6102d93660046113e4565b610968565b6101c66102ec36600461143e565b6109cc565b6101c66102ff3660046114d3565b6109f5565b610204610a15565b610204610a1a565b610272610322366004611496565b610a3e565b6101ef610335366004611503565b610a59565b6101ef6103483660046114d3565b610abd565b6101ef61035b366004611503565b610b4c565b6101ef61036e36600461143e565b610b8d565b6101ef6103813660046114b4565b610bac565b61025d610c73565b6101ef61039c366004611503565b610c97565b6101ef6103af366004611496565b610d28565b60006001600160e01b031982167f7965db0b0000000000000000000000000000000000000000000000000000000014806103f257506103f282610ff5565b92915050565b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb061042a81610425611027565b61102b565b6040516351cff8d960e01b81526001600160a01b038416906351cff8d9906104569085906004016119ac565b600060405180830381600087803b15801561047057600080fd5b505af1158015610484573d6000803e3d6000fd5b50505050505050565b60009081526020819052604090206001015490565b6104ab8261048d565b6104b781610425611027565b6104c1838361108f565b505050565b6001600160a01b0380821660009081526003602090815260408083205481517f90406ef80000000000000000000000000000000000000000000000000000000081529151939416926390406ef892600480840193919291829003018186803b15801561053157600080fd5b505afa158015610545573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f29190611533565b610571611027565b6001600160a01b0316816001600160a01b0316146105aa5760405162461bcd60e51b81526004016105a190611ab0565b60405180910390fd5b6105b48282611114565b5050565b6003602052600090815260409020546001600160a01b031681565b6001546001600160a01b031681565b60006105f081610425611027565b6001600160a01b0383166106165760405162461bcd60e51b81526004016105a190611a20565b6001600160a01b03821661063c5760405162461bcd60e51b81526004016105a190611a60565b506001600160a01b0391821660009081526004602090815260408083209390941682529190915220805460ff19169055565b6001600160a01b0380821660009081526003602090815260408083205481517f722713f700000000000000000000000000000000000000000000000000000000815291519394169263722713f792600480840193919291829003018186803b15801561053157600080fd5b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb061070681610425611027565b6001600160a01b03838116600090815260026020526040902054161561073e5760405162461bcd60e51b81526004016105a190611a50565b6001600160a01b0382166107645760405162461bcd60e51b81526004016105a190611a70565b506001600160a01b039182166000908152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb06107cd81610425611027565b6001600160a01b0380841660009081526004602090815260408083209386168352929052205460ff1615156001146108175760405162461bcd60e51b81526004016105a190611a30565b6001600160a01b0380841660009081526003602052604090205416801561092b57806001600160a01b031663853828b66040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561087357600080fd5b505af1158015610887573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ab9190611533565b506040516351cff8d960e01b81526001600160a01b038216906351cff8d9906108f8907f0000000000000000000000000000000000000000000000000000000000000000906004016119ac565b600060405180830381600087803b15801561091257600080fd5b505af1158015610926573d6000803e3d6000fd5b505050505b50506001600160a01b039182166000908152600360205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600061097681610425611027565b6001600160a01b03821661099c5760405162461bcd60e51b81526004016105a190611ac0565b506001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600460209081526000928352604080842090915290825290205460ff1681565b600081565b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb081565b6002602052600090815260409020546001600160a01b031681565b6001600160a01b0380831660008181526003602052604090205490911690610a82908284611197565b806001600160a01b031663d0e30db06040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561047057600080fd5b6000610acb81610425611027565b6001600160a01b038316610af15760405162461bcd60e51b81526004016105a190611a20565b6001600160a01b038216610b175760405162461bcd60e51b81526004016105a190611a60565b506001600160a01b0391821660009081526004602090815260408083209390941682529190915220805460ff19166001179055565b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb0610b7981610425611027565b6104c16001600160a01b0384163384611197565b610b968261048d565b610ba281610425611027565b6104c18383611114565b6001600160a01b03828116600090815260026020526040902054163314610be55760405162461bcd60e51b81526004016105a190611aa0565b6001600160a01b03808316600090815260036020526040908190205490517f10d7e4790000000000000000000000000000000000000000000000000000000081529116906310d7e47990610c3d9084906004016119ac565b600060405180830381600087803b158015610c5757600080fd5b505af1158015610c6b573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03828116600090815260026020526040902054163314610cd05760405162461bcd60e51b81526004016105a190611aa0565b6001600160a01b03808316600090815260036020526040908190205490517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152911690632e1a7d4d90610c3d9084906004016119e3565b7f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb0610d5581610425611027565b6001600160a01b0380831660009081526003602090815260408083205481517f853828b6000000000000000000000000000000000000000000000000000000008152915194169363853828b693600480840194938390030190829087803b158015610dbf57600080fd5b505af1158015610dd3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c19190611533565b60606000610e06836002611b10565b610e11906002611ae2565b67ffffffffffffffff811115610e3757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610e61576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610ea657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610eff57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610f23846002611b10565b610f2e906001611ae2565b90505b6001811115610fcf577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610f7d57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610fa157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610fc881611bac565b9050610f31565b508315610fee5760405162461bcd60e51b81526004016105a190611a10565b9392505050565b6001600160e01b031981167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b3390565b61103582826109cc565b6105b45761104d816001600160a01b03166014610df7565b611058836020610df7565b60405160200161106992919061197e565b60408051601f198184030181529082905262461bcd60e51b82526105a1916004016119ff565b61109982826109cc565b6105b4576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556110d0611027565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61111e82826109cc565b156105b4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055611153611027565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6104c18363a9059cbb60e01b84846040516024016111b69291906119ba565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909316929092179091526000611252826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661128c9092919063ffffffff16565b8051909150156104c157808060200190518101906112709190611402565b6104c15760405162461bcd60e51b81526004016105a190611a90565b606061129b84846000856112a3565b949350505050565b6060824710156112c55760405162461bcd60e51b81526004016105a190611a40565b6112ce85611363565b6112ea5760405162461bcd60e51b81526004016105a190611a80565b600080866001600160a01b031685876040516113069190611972565b60006040518083038185875af1925050503d8060008114611343576040519150601f19603f3d011682016040523d82523d6000602084013e611348565b606091505b5091509150611358828286611369565b979650505050505050565b3b151590565b60608315611378575081610fee565b8251156113885782518084602001fd5b8160405162461bcd60e51b81526004016105a191906119ff565b80356103f281611bee565b80516103f281611c05565b80356103f281611c0e565b80356103f281611c17565b80356103f281611c20565b80516103f281611c0e565b6000602082840312156113f657600080fd5b600061129b84846113a2565b60006020828403121561141457600080fd5b600061129b84846113ad565b60006020828403121561143257600080fd5b600061129b84846113b8565b6000806040838503121561145157600080fd5b600061145d85856113b8565b925050602061146e858286016113a2565b9150509250929050565b60006020828403121561148a57600080fd5b600061129b84846113c3565b6000602082840312156114a857600080fd5b600061129b84846113ce565b600080604083850312156114c757600080fd5b600061145d85856113ce565b600080604083850312156114e657600080fd5b60006114f285856113ce565b925050602061146e858286016113ce565b6000806040838503121561151657600080fd5b600061152285856113ce565b925050602061146e858286016113b8565b60006020828403121561154557600080fd5b600061129b84846113d9565b61155a81611b45565b82525050565b61155a81611b50565b61155a81611b55565b600061157d82611ad0565b6115878185611ad4565b9350611597818560208601611b7c565b9290920192915050565b61155a81611b65565b60006115b582611ad0565b6115bf8185611ad9565b93506115cf818560208601611b7c565b6115d881611be4565b9093019392505050565b60006115ef602083611ad9565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74815260200192915050565b6000611628600d83611ad9565b7f494e56414c49445f544f4b454e00000000000000000000000000000000000000815260200192915050565b6000611661601583611ad9565b7f53545241544547595f4e4f545f415050524f5645440000000000000000000000815260200192915050565b600061169a602683611ad9565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f81527f722063616c6c0000000000000000000000000000000000000000000000000000602082015260400192915050565b60006116f9601183611ad9565b7f414c52454144595f4841535f5641554c54000000000000000000000000000000815260200192915050565b6000611732601083611ad9565b7f494e56414c49445f535452415445475900000000000000000000000000000000815260200192915050565b600061176b600d83611ad9565b7f494e56414c49445f5641554c5400000000000000000000000000000000000000815260200192915050565b60006117a4601d83611ad9565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815260200192915050565b60006117dd601783611ad4565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260170192915050565b6000611816602a83611ad9565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e81527f6f74207375636365656400000000000000000000000000000000000000000000602082015260400192915050565b6000611875600983611ad9565b7f4e4f545f5641554c540000000000000000000000000000000000000000000000815260200192915050565b60006118ae601183611ad4565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000815260110192915050565b60006118e7602f83611ad9565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636581527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015260400192915050565b6000611946601383611ad9565b7f494e56414c49445f4645455f4144445245535300000000000000000000000000815260200192915050565b6000610fee8284611572565b6000611989826117d0565b91506119958285611572565b91506119a0826118a1565b915061129b8284611572565b602081016103f28284611551565b604081016119c88285611551565b610fee6020830184611569565b602081016103f28284611560565b602081016103f28284611569565b602081016103f282846115a1565b60208082528101610fee81846115aa565b602080825281016103f2816115e2565b602080825281016103f28161161b565b602080825281016103f281611654565b602080825281016103f28161168d565b602080825281016103f2816116ec565b602080825281016103f281611725565b602080825281016103f28161175e565b602080825281016103f281611797565b602080825281016103f281611809565b602080825281016103f281611868565b602080825281016103f2816118da565b602080825281016103f281611939565b5190565b919050565b90815260200190565b6000611aed82611b55565b9150611af883611b55565b92508219821115611b0b57611b0b611bce565b500190565b6000611b1b82611b55565b9150611b2683611b55565b9250816000190483118215151615611b4057611b40611bce565b500290565b60006103f282611b70565b151590565b90565b6001600160e01b03191690565b60006103f282611b45565b6001600160a01b031690565b60005b83811015611b97578181015183820152602001611b7f565b83811115611ba6576000848401525b50505050565b6000611bb782611b55565b915081611bc657611bc6611bce565b506000190190565b634e487b7160e01b600052601160045260246000fd5b601f01601f191690565b611bf781611b45565b8114611c0257600080fd5b50565b611bf781611b50565b611bf781611b55565b611bf781611b58565b611bf781611b6556fea2646970667358221220be54d0ae351d041c9b6b860b7f03ac315bf34903044971f217f4a9ce22d4d8ac64736f6c63430008000033";

export class Controller__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _jpeg: string,
    _feeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Controller> {
    return super.deploy(
      _jpeg,
      _feeAddress,
      overrides || {}
    ) as Promise<Controller>;
  }
  getDeployTransaction(
    _jpeg: string,
    _feeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_jpeg, _feeAddress, overrides || {});
  }
  attach(address: string): Controller {
    return super.attach(address) as Controller;
  }
  connect(signer: Signer): Controller__factory {
    return super.connect(signer) as Controller__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ControllerInterface {
    return new utils.Interface(_abi) as ControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controller {
    return new Contract(address, _abi, signerOrProvider) as Controller;
  }
}

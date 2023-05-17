/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestElixirCallee } from "../TestElixirCallee";

export class TestElixirCallee__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestElixirCallee> {
    return super.deploy(overrides || {}) as Promise<TestElixirCallee>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestElixirCallee {
    return super.attach(address) as TestElixirCallee;
  }
  connect(signer: Signer): TestElixirCallee__factory {
    return super.connect(signer) as TestElixirCallee__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestElixirCallee {
    return new Contract(address, _abi, signerOrProvider) as TestElixirCallee;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "elixirSwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap0ForExact1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap1ForExact0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact0For1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact1For0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106e7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063d804d7a711610050578063d804d7a714610094578063e2be9109146100a7578063f603482c146100ba57600080fd5b80636dfc0ddb1461006c578063bac7bf7814610081575b600080fd5b61007f61007a366004610430565b6100cd565b005b61007f61008f366004610430565b61016e565b61007f6100a2366004610483565b610192565b61007f6100b5366004610430565b6103b4565b61007f6100c8366004610430565b6103cf565b836001600160a01b031663128acb088360016100e8876103e6565b604080513360208201528791016040516020818303038152906040526040518663ffffffff1660e01b8152600401610124959493929190610503565b60408051808303816000875af1158015610142573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610166919061059c565b505050505050565b836001600160a01b031663128acb08836001610189876103e6565b6100e8906105c0565b60006101a08284018461061f565b905060008513156102a757336001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020d9190610643565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301523360248301526044820188905291909116906323b872dd906064016020604051808303816000875af115801561027d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a19190610660565b506103ad565b600084136102b7576102b7610682565b336001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103199190610643565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301523360248301526044820187905291909116906323b872dd906064016020604051808303816000875af1158015610389573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101669190610660565b5050505050565b836001600160a01b031663128acb088360006100e8876103e6565b836001600160a01b031663128acb08836000610189875b60007f8000000000000000000000000000000000000000000000000000000000000000821061041457600080fd5b5090565b6001600160a01b038116811461042d57600080fd5b50565b6000806000806080858703121561044657600080fd5b843561045181610418565b935060208501359250604085013561046881610418565b9150606085013561047881610418565b939692955090935050565b6000806000806060858703121561049957600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156104bf57600080fd5b818701915087601f8301126104d357600080fd5b8135818111156104e257600080fd5b8860208285010111156104f457600080fd5b95989497505060200194505050565b60006001600160a01b038088168352602087151581850152866040850152818616606085015260a06080850152845191508160a085015260005b828110156105595785810182015185820160c00152810161053d565b5050600060c0828501015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509695505050505050565b600080604083850312156105af57600080fd5b505080516020909101519092909150565b60007f80000000000000000000000000000000000000000000000000000000000000008203610618577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060000390565b60006020828403121561063157600080fd5b813561063c81610418565b9392505050565b60006020828403121561065557600080fd5b815161063c81610418565b60006020828403121561067257600080fd5b8151801515811461063c57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea26469706673582212205a35226673dd03bacc974171b582dc7cb843a5e85181158c3d39edbdead2604564736f6c63430008130033";

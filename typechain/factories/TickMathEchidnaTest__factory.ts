/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickMathEchidnaTest } from "../TickMathEchidnaTest";

export class TickMathEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickMathEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickMathEchidnaTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickMathEchidnaTest {
    return super.attach(address) as TickMathEchidnaTest;
  }
  connect(signer: Signer): TickMathEchidnaTest__factory {
    return super.connect(signer) as TickMathEchidnaTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMathEchidnaTest {
    return new Contract(address, _abi, signerOrProvider) as TickMathEchidnaTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "checkGetSqrtRatioAtTickInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "ratio",
        type: "uint160",
      },
    ],
    name: "checkGetTickAtSqrtRatioInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610846806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806347d38f4d1461003b578063df01e52d1461005d575b600080fd5b61005b6004803603602081101561005157600080fd5b503560020b610083565b005b61005b6004803603602081101561007357600080fd5b50356001600160a01b0316610121565b600061008e8261019c565b9050806001600160a01b03166100a66001840361019c565b6001600160a01b03161080156100d857506100c38260010161019c565b6001600160a01b0316816001600160a01b0316105b6100de57fe5b6401000276a36001600160a01b03821610156100f657fe5b73fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038216111561011d57fe5b5050565b600061012c826104db565b90506101378161019c565b6001600160a01b0316826001600160a01b031610158015610174575061015f8160010161019c565b6001600160a01b0316826001600160a01b0316105b61017a57fe5b620d89e719600282900b121561018c57fe5b620d89e8600282900b1261011d57fe5b60008060008360020b126101b3578260020b6101bb565b8260020b6000035b9050620d89e88111156101f9576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661021a5770010000000000000000000000000000000061022c565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610260576ffff97272373d413259a46990580e213a0260801c5b600482161561027f576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561029e576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156102bd576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156102dc576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156102fb576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561031a576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561033a576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561035a576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561037a576ff3392b0822b70005940c7a398e4b70f30260801c5b61080082161561039a576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156103ba576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156103da576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156103fa576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561041a576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561043b576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561045b576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561047a576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610497576b048a170391f7dc42444e8fa20260801c5b60008460020b13156104b25780600019816104ae57fe5b0490505b6401000000008106156104c65760016104c9565b60005b60ff16602082901c0192505050919050565b60006401000276a36001600160a01b03831610801590610517575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b61054c576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106105f657607f810383901c9150610600565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461080157886001600160a01b03166107e58261019c565b6001600160a01b031611156107fa57816107fc565b805b610803565b815b999850505050505050505056fea2646970667358221220406b22fd06d3789bd142e29d4d9d0105005d82786c797d3533a7e8ae2486eb3364736f6c63430007060033";

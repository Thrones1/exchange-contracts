/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickMathTest } from "../TickMathTest";

export class TickMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickMathTest> {
    return super.deploy(overrides || {}) as Promise<TickMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickMathTest {
    return super.attach(address) as TickMathTest;
  }
  connect(signer: Signer): TickMathTest__factory {
    return super.connect(signer) as TickMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickMathTest {
    return new Contract(address, _abi, signerOrProvider) as TickMathTest;
  }
}

const _abi = [
  {
    inputs: [],
    name: "MAX_SQRT_RATIO",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_SQRT_RATIO",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getGasCostOfGetSqrtRatioAtTick",
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
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "getGasCostOfGetTickAtSqrtRatio",
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
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getSqrtRatioAtTick",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "getTickAtSqrtRatio",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610867806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063a7398eb411610050578063a7398eb4146100f8578063b0622f671461012a578063ee8847ff1461015057610072565b80634f76c058146100775780636d2cc304146100b4578063986cfba3146100d8575b600080fd5b61009d6004803603602081101561008d57600080fd5b50356001600160a01b0316610158565b6040805160029290920b8252519081900360200190f35b6100bc610169565b604080516001600160a01b039092168252519081900360200190f35b6100bc600480360360208110156100ee57600080fd5b503560020b610181565b6101186004803603602081101561010e57600080fd5b503560020b61018c565b60408051918252519081900360200190f35b6101186004803603602081101561014057600080fd5b50356001600160a01b03166101a5565b6100bc6101b4565b6000610163826101bd565b92915050565b73fffd8963efd1fc6a506488495d951d5263988d2690565b6000610163826104f2565b6000805a905061019b836104f2565b505a900392915050565b6000805a905061019b836101bd565b6401000276a390565b60006401000276a36001600160a01b038316108015906101f9575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b61022e576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106102d857607f810383901c91506102e2565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b146104e357886001600160a01b03166104c7826104f2565b6001600160a01b031611156104dc57816104de565b805b6104e5565b815b9998505050505050505050565b60008060008360020b12610509578260020b610511565b8260020b6000035b9050620d89e881111561054f576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661057057700100000000000000000000000000000000610582565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156105b6576ffff97272373d413259a46990580e213a0260801c5b60048216156105d5576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156105f4576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610613576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610632576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610651576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610670576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610690576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156106b0576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156106d0576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156106f0576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610710576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610730576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610750576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610770576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610791576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156107b1576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156107d0576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156107ed576b048a170391f7dc42444e8fa20260801c5b60008460020b131561080857806000198161080457fe5b0490505b64010000000081061561081c57600161081f565b60005b60ff16602082901c019250505091905056fea2646970667358221220bbcd9e0cb802e8653cebbaf43eb93e7b242c7f0925073390a518524541ca1bc464736f6c63430007060033";

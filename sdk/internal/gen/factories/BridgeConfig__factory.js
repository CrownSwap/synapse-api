/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [],
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
        name: "BRIDGEMANAGER_ROLE",
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
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "calculateSwapFee",
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
        inputs: [],
        name: "getAllTokenIDs",
        outputs: [
            {
                internalType: "string[]",
                name: "result",
                type: "string[]",
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
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getRoleMember",
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
        name: "getRoleMemberCount",
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
                internalType: "string",
                name: "tokenID",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
        ],
        name: "getToken",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "tokenDecimals",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "swapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasUnderlying",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "isUnderlying",
                        type: "bool",
                    },
                ],
                internalType: "struct BridgeConfig.Token",
                name: "token",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
        ],
        name: "getToken",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "tokenDecimals",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "swapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasUnderlying",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "isUnderlying",
                        type: "bool",
                    },
                ],
                internalType: "struct BridgeConfig.Token",
                name: "token",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
        ],
        name: "getTokenID",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "tokenID",
                type: "string",
            },
        ],
        name: "getUnderlyingToken",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "tokenDecimals",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "swapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minSwapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasUnderlying",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "isUnderlying",
                        type: "bool",
                    },
                ],
                internalType: "struct BridgeConfig.Token",
                name: "token",
                type: "tuple",
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
                internalType: "string",
                name: "tokenID",
                type: "string",
            },
        ],
        name: "hasUnderlyingToken",
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
                internalType: "string",
                name: "tokenID",
                type: "string",
            },
        ],
        name: "isTokenIDExist",
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
                internalType: "string",
                name: "tokenID",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "tokenDecimals",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "maxSwap",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSwap",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "swapFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSwapFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minSwapFee",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "hasUnderlying",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "isUnderlying",
                type: "bool",
            },
        ],
        name: "setTokenConfig",
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
];
export class BridgeConfig__factory {
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}

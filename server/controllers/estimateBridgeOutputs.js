import {BigNumber} from "ethers";
import { Bridges } from "../core/cache.js";
import {getTokenSymbolFromQueryParam} from "../core/utils.js";
import {Tokens} from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/ChainUtils.js";

/**
 * @param {String} fromChain
 * @param {String} toChain
 * @param {String} fromToken
 * @param {String} toToken
 * @param {String|undefined} amountFrom
 * @returns {Object[]}
 */
async function estimateBridgeOutputs(fromChain, toChain, fromToken, toToken, amountFrom) {
    const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)
    const toChainId = ChainUtils.getIdFromRequestQueryParam(toChain)

    const fromTokenSymbol = getTokenSymbolFromQueryParam(fromToken)
    const fromTokenObj = Tokens[fromTokenSymbol]

    const toTokenSymbol = getTokenSymbolFromQueryParam(fromToken)
    const toTokenObj = Tokens[toTokenSymbol]

    const bigNumAmount = amountFrom ? BigNumber.from(amountFrom) : null;

    const bridge = Bridges[fromChainId];

    const estimate = await bridge.estimateBridgeTokenOutput({
        tokenFrom: fromTokenObj,
        tokenTo: toTokenObj,
        chainIdTo: toChainId,
        amountFrom: bigNumAmount
    });

    return {
        amountToReceive: estimate.amountToReceive.toString(),
        bridgeFee: estimate.bridgeFee.toString(),
    }
}

export { estimateBridgeOutputs };

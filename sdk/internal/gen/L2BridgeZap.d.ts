import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L2BridgeZapInterface extends utils.Interface {
    contractName: "L2BridgeZap";
    functions: {
        "WETH_ADDRESS()": FunctionFragment;
        "calculateSwap(address,uint8,uint8,uint256)": FunctionFragment;
        "deposit(address,uint256,address,uint256)": FunctionFragment;
        "depositETH(address,uint256,uint256)": FunctionFragment;
        "redeem(address,uint256,address,uint256)": FunctionFragment;
        "redeemAndRemove(address,uint256,address,uint256,uint8,uint256,uint256)": FunctionFragment;
        "redeemAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": FunctionFragment;
        "swapAndRedeem(address,uint256,address,uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
        "swapAndRedeemAndRemove(address,uint256,address,uint8,uint8,uint256,uint256,uint256,uint8,uint256,uint256)": FunctionFragment;
        "swapAndRedeemAndSwap(address,uint256,address,uint8,uint8,uint256,uint256,uint256,uint8,uint8,uint256,uint256)": FunctionFragment;
        "swapETHAndRedeem(address,uint256,address,uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
        "swapETHAndRedeemAndSwap(address,uint256,address,uint8,uint8,uint256,uint256,uint256,uint8,uint8,uint256,uint256)": FunctionFragment;
        "swapMap(address)": FunctionFragment;
        "swapTokensMap(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "WETH_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateSwap", values: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETH", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemAndRemove", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "redeemAndSwap", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapAndRedeem", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapAndRedeemAndRemove", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapAndRedeemAndSwap", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapETHAndRedeem", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapETHAndRedeemAndSwap", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapMap", values: [string]): string;
    encodeFunctionData(functionFragment: "swapTokensMap", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAndRemove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndRedeemAndRemove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndRedeemAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHAndRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHAndRedeemAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensMap", data: BytesLike): Result;
    events: {};
}
export interface L2BridgeZap extends BaseContract {
    contractName: "L2BridgeZap";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2BridgeZapInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        WETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        /**
         * Calculate amount of tokens you receive on swap
         * @param dx the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee.
         * @param tokenIndexFrom the token the user wants to sell
         * @param tokenIndexTo the token the user wants to buy
         */
        calculateSwap(token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which chain to bridge assets onto
         * @param to address on other chain to bridge assets to
         */
        depositETH(to: string, chainId: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Wraps redeemAndRemove on SynapseBridge Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount of (typically) LP token to pass to the nodes to attempt to removeLiquidity() with to redeem for the underlying assets of the LP token
         * @param chainId which underlying chain to bridge assets onto
         * @param liqDeadline Specificies the deadline that the nodes are allowed to try to redeem/swap the LP token*
         * @param liqMinAmount Specifies the minimum amount of the underlying asset needed for the nodes to execute the redeem/swap
         * @param liqTokenIndex Specifies which of the underlying LP assets the nodes should attempt to redeem for
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Wraps redeemAndSwap on SynapseBridge.sol Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees
         * @param chainId which underlying chain to bridge assets onto
         * @param deadline latest timestamp to accept this transaction*
         * @param minDy the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         * @param tokenIndexFrom the token the user wants to swap from
         * @param tokenIndexTo the token the user wants to swap to
         */
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndRedeemAndRemove(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapETHAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapETHAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapMap(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        swapTokensMap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;
    /**
     * Calculate amount of tokens you receive on swap
     * @param dx the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee.
     * @param tokenIndexFrom the token the user wants to sell
     * @param tokenIndexTo the token the user wants to buy
     */
    calculateSwap(token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * wraps SynapseBridge redeem()
     * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
     * @param chainId which underlying chain to bridge assets onto
     * @param to address on other chain to redeem underlying assets to
     * @param token ERC20 compatible token to deposit into the bridge
     */
    deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions
     * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
     * @param chainId which chain to bridge assets onto
     * @param to address on other chain to bridge assets to
     */
    depositETH(to: string, chainId: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * wraps SynapseBridge redeem()
     * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
     * @param chainId which underlying chain to bridge assets onto
     * @param to address on other chain to redeem underlying assets to
     * @param token ERC20 compatible token to deposit into the bridge
     */
    redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Wraps redeemAndRemove on SynapseBridge Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
     * @param amount Amount of (typically) LP token to pass to the nodes to attempt to removeLiquidity() with to redeem for the underlying assets of the LP token
     * @param chainId which underlying chain to bridge assets onto
     * @param liqDeadline Specificies the deadline that the nodes are allowed to try to redeem/swap the LP token*
     * @param liqMinAmount Specifies the minimum amount of the underlying asset needed for the nodes to execute the redeem/swap
     * @param liqTokenIndex Specifies which of the underlying LP assets the nodes should attempt to redeem for
     * @param to address on other chain to redeem underlying assets to
     * @param token ERC20 compatible token to deposit into the bridge
     */
    redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Wraps redeemAndSwap on SynapseBridge.sol Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
     * @param amount Amount in native token decimals to transfer cross-chain pre-fees
     * @param chainId which underlying chain to bridge assets onto
     * @param deadline latest timestamp to accept this transaction*
     * @param minDy the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.
     * @param to address on other chain to redeem underlying assets to
     * @param token ERC20 compatible token to deposit into the bridge
     * @param tokenIndexFrom the token the user wants to swap from
     * @param tokenIndexTo the token the user wants to swap to
     */
    redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndRedeemAndRemove(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapETHAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapETHAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapMap(arg0: string, overrides?: CallOverrides): Promise<string>;
    swapTokensMap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;
        /**
         * Calculate amount of tokens you receive on swap
         * @param dx the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee.
         * @param tokenIndexFrom the token the user wants to sell
         * @param tokenIndexTo the token the user wants to buy
         */
        calculateSwap(token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which chain to bridge assets onto
         * @param to address on other chain to bridge assets to
         */
        depositETH(to: string, chainId: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Wraps redeemAndRemove on SynapseBridge Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount of (typically) LP token to pass to the nodes to attempt to removeLiquidity() with to redeem for the underlying assets of the LP token
         * @param chainId which underlying chain to bridge assets onto
         * @param liqDeadline Specificies the deadline that the nodes are allowed to try to redeem/swap the LP token*
         * @param liqMinAmount Specifies the minimum amount of the underlying asset needed for the nodes to execute the redeem/swap
         * @param liqTokenIndex Specifies which of the underlying LP assets the nodes should attempt to redeem for
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Wraps redeemAndSwap on SynapseBridge.sol Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees
         * @param chainId which underlying chain to bridge assets onto
         * @param deadline latest timestamp to accept this transaction*
         * @param minDy the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         * @param tokenIndexFrom the token the user wants to swap from
         * @param tokenIndexTo the token the user wants to swap to
         */
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapAndRedeemAndRemove(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapETHAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapETHAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapMap(arg0: string, overrides?: CallOverrides): Promise<string>;
        swapTokensMap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        WETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Calculate amount of tokens you receive on swap
         * @param dx the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee.
         * @param tokenIndexFrom the token the user wants to sell
         * @param tokenIndexTo the token the user wants to buy
         */
        calculateSwap(token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which chain to bridge assets onto
         * @param to address on other chain to bridge assets to
         */
        depositETH(to: string, chainId: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Wraps redeemAndRemove on SynapseBridge Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount of (typically) LP token to pass to the nodes to attempt to removeLiquidity() with to redeem for the underlying assets of the LP token
         * @param chainId which underlying chain to bridge assets onto
         * @param liqDeadline Specificies the deadline that the nodes are allowed to try to redeem/swap the LP token*
         * @param liqMinAmount Specifies the minimum amount of the underlying asset needed for the nodes to execute the redeem/swap
         * @param liqTokenIndex Specifies which of the underlying LP assets the nodes should attempt to redeem for
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Wraps redeemAndSwap on SynapseBridge.sol Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees
         * @param chainId which underlying chain to bridge assets onto
         * @param deadline latest timestamp to accept this transaction*
         * @param minDy the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         * @param tokenIndexFrom the token the user wants to swap from
         * @param tokenIndexTo the token the user wants to swap to
         */
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndRedeemAndRemove(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapETHAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapETHAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapTokensMap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Calculate amount of tokens you receive on swap
         * @param dx the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee.
         * @param tokenIndexFrom the token the user wants to sell
         * @param tokenIndexTo the token the user wants to buy
         */
        calculateSwap(token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which chain to bridge assets onto
         * @param to address on other chain to bridge assets to
         */
        depositETH(to: string, chainId: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * wraps SynapseBridge redeem()
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees*
         * @param chainId which underlying chain to bridge assets onto
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Wraps redeemAndRemove on SynapseBridge Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount of (typically) LP token to pass to the nodes to attempt to removeLiquidity() with to redeem for the underlying assets of the LP token
         * @param chainId which underlying chain to bridge assets onto
         * @param liqDeadline Specificies the deadline that the nodes are allowed to try to redeem/swap the LP token*
         * @param liqMinAmount Specifies the minimum amount of the underlying asset needed for the nodes to execute the redeem/swap
         * @param liqTokenIndex Specifies which of the underlying LP assets the nodes should attempt to redeem for
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         */
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Wraps redeemAndSwap on SynapseBridge.sol Relays to nodes that (typically) a wrapped synAsset ERC20 token has been burned and the underlying needs to be redeeemed on the native chain. This function indicates to the nodes that they should attempt to redeem the LP token for the underlying assets (E.g "swap" out of the LP token)
         * @param amount Amount in native token decimals to transfer cross-chain pre-fees
         * @param chainId which underlying chain to bridge assets onto
         * @param deadline latest timestamp to accept this transaction*
         * @param minDy the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.
         * @param to address on other chain to redeem underlying assets to
         * @param token ERC20 compatible token to deposit into the bridge
         * @param tokenIndexFrom the token the user wants to swap from
         * @param tokenIndexTo the token the user wants to swap to
         */
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndRedeemAndRemove(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, liqTokenIndex: BigNumberish, liqMinAmount: BigNumberish, liqDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapETHAndRedeem(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapETHAndRedeemAndSwap(to: string, chainId: BigNumberish, token: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, swapTokenIndexFrom: BigNumberish, swapTokenIndexTo: BigNumberish, swapMinDy: BigNumberish, swapDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapTokensMap(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

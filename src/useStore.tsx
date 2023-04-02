import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
// import useWebSocket from 'react-use-websocket';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js'
import MD5 from 'crypto-js/md5';
import Config from './config.json'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import zh from 'javascript-time-ago/locale/zh.json'
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
// import { JsonRpcProvider } from '@ethersproject/providers';
// import WebCrypto from './WebCrypto';
// import Networks from './config/networks.json'
// import TestnetNetworks from './config/networks.testnet.json'
TimeAgo.addLocale(en)
TimeAgo.addLocale(zh)

const timeAgos:{[key:string]:any} = {
	'en-US': new TimeAgo('en'),
	'zh-CN': new TimeAgo('zh'),
}

export const config = Config
export const zeroAddress = "0x0000000000000000000000000000000000000000"
export const provider = new ethers.providers.JsonRpcProvider(config.rpc);

// const fns = {} as {
// 	[id:string]:(response:ServerResponse) => Promise<void>
// }

const locales = {
	"en-US": require('./locales/en-US.json'),
	"zh-CN": require('./locales/zh-CN.json'),
};

export const tips = (html:string) => {
	toast(html, {
		position: "top-right",
		autoClose: 3000,
	});
}

export const toEther = (value: string) => Number(ethers.utils.formatEther(value))

// export const encodeCall = (iface: ethers.Interface, contract:string, method: string, values: any[], id: number) => {
// 	return {
// 		jsonrpc: "2.0", 
// 		method: "eth_call", 
// 		params: [{to: contract, data: iface.encodeFunctionData(method, values)}, "latest"], 
// 		id
// 	} as RpcRequestType
// }

// export const decodeCallData = (iface: ethers.Interface, method: string, json: RpcResponseType) => {
// 	if (json.result!==undefined) {
// 		try {
// 			const value = iface.decodeFunctionResult(method, json.result)
// 			if (Array.isArray(value)) return value[0]
// 		} catch (error) {
// 		}
// 	}
// 	return null
// }

// export const loadExternal = (key:string, uri: string):Promise<boolean> => {
// 	if (key && key in window) return Promise.resolve(true)
// 	return new Promise(resolve=>{
// 		const script = document.createElement("script");
// 		script.src = uri
// 		script.async = true;
// 		script.onload = ()=>resolve(true)
// 		document.body.appendChild(script);
// 	})
// }

// export const fetchJson = async (uri: string, params?: RpcRequestType|RpcRequestType[]) => {
// 	try {
// 		if (params===undefined) {
// 			const response = await fetch(uri, {
// 				headers: {Accept: "application/json", "Content-Type": "application/json"},
// 			});
// 			return await response.json()
// 		} else {
// 			const response = await fetch(uri, {
// 				body: JSON.stringify(params),
// 				headers: {Accept: "application/json", "Content-Type": "application/json"},
// 				method: "POST"
// 			});
// 			return await response.json() as RpcResponseType|RpcResponseType[];	
// 		}
// 	} catch (error) {
// 		console.log(error)
// 	}
// 	return null
// }
export const STAKING_MULTIPLIER = 40

// export const toEther = (v: number|string) => {
// 	if (typeof v==='number') return v / 1e18
// 	return Number(ethers.formatEther(v))
// }

export const toDate = (v: number) => {
	return Math.ceil(v / 86400)
}

export const N = (n: bigint|number, p: number = 18) => (Number(ethers.utils.formatUnits(typeof n==='number' ? BigInt(Math.round(n)) : n, p)))
export const NF = (n:string|number)=>Number(n).toLocaleString('en')
// export const toDate = (timestamp: number) => {
// 	const d = new Date(timestamp * 1e3)
// 	return [d.getMonth() + 1, d.getDate()].join('/')
// }
// export const toKillo = (n: number) => {
// 	return (Number(n) < 1000 ? String(n) : `${~~(Number(n)/1000)}k`)
// }
export const ellipsis = (address: string, start?: number) => {
	if (!address) return ''
	const len = start || 10
	return address.length > len ? `${address.slice(0, start || 10)}...${address.slice(-4)}` : address
}

export const now = ()=> Math.round(+new Date().getTime() / 1e3)
// export const isSolcVersionText = (version: string)=> (/^v\d{1,2}\.\d{1,2}\.\d{1,2}\+commit\.[0-9a-f]{8}$/.test(version))

export const validateAddress = (address: string) => /^0x[a-f0-9A-F]{40}$/.test(address)
export const isHex = (hex: string) => /^0x[a-f0-9A-F]+$/.test(hex)
export const validateEmail = (email:string) =>email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
export const validateUsername = (username:string) => /^[a-zA-Z0-9]{6,20}$/.test(username);

// export const prettyFormat = (n:number, p: number=8)=>{
// 	const x = NF(n.toFixed(p)).split('.')
// 	return (
// 		<>
// 			<span>{x[0]}.</span>
// 			<span className='gray'>{x[1]}</span>
// 		</>
// 	)
// }

// export const prettyPrint = (elem: HTMLElement) => {
// 	loadExternal('PR', '/run_prettify.min.js').then(()=>window.PR.prettyPrint(null, elem))
// }

// const setDocumentCookie = () => {
// 	const cookie = uuidv4()
// 	document.cookie = `${config.appKey}=${cookie}; path=/; sameSite=true; expires=${new Date(+new Date() + 7 * 86400000).toUTCString()}`
// 	return cookie
// }

export const copyToClipboard = (text:string) => {
	var textField = document.createElement('textarea')
	textField.innerText = text
	document.body.appendChild(textField)
	textField.select()
	document.execCommand('copy')
	textField.remove()
};

export const download = (filename: string, data: string) => {
	const link = document.createElement('a');
	link.setAttribute('href', 'data:text/plain;charset=utf-8, ' + data);
	link.setAttribute('download', filename);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export const fromEncryptedWallet = (json: string, password: string) => {
	return ethers.Wallet.fromEncryptedJsonSync(json, password) 
}

export const toEncryptedWallet = (wallet: any, password: string) => {
	return wallet.encryptSync(password)
}

export const md5 = (plain:string) => MD5(plain).toString(CryptoJS.enc.Hex);

export const encrypt = (plain:string, password:string) => {
	const text = encodeURI(plain);
	const key = MD5(password);
    const iv  = CryptoJS.enc.Utf8.parse(password);
    const ciphered = CryptoJS.AES.encrypt(text, key, { iv: iv });
    return ciphered.toString();
}

export const decrypt = (cryptText:string, password:string) => {
	const key = MD5(password);
    const iv  = CryptoJS.enc.Utf8.parse(password);
    const cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(cryptText)});
    var decrypted = CryptoJS.AES.decrypt(cipherParams, key, { iv: iv});
    return decodeURI(decrypted.toString(CryptoJS.enc.Utf8))
}

export const calculateRewards = (baseRewardPerSecond: number, totalStake: number, stakeAmount: number, stakePeriod: number, validatorCommission?: number) => {
	const _dailyTotalRewards = Number(baseRewardPerSecond * 86400)
	const _rate = stakeAmount / (totalStake + stakeAmount)
	const _dailyRewards = _dailyTotalRewards * _rate
	let _rewards = _dailyRewards * stakePeriod
	if (validatorCommission) _rewards -= _rewards * validatorCommission
	const _apr = Math.round(_rewards / stakeAmount * 10000) / 100
	return [_rewards, _apr]
}

const getStore = (initialState: StoreObject) => {
	try {
		const buf = window.localStorage.getItem(config.appKey)
		if (buf) {
			const json = JSON.parse(buf)
			for(let k in json) {
				if (initialState[k] !== undefined) {
					initialState[k] = json[k]
				}
			}
		}
		initialState.loading = false
		if (initialState.cookie==='') {
			initialState.cookie = uuidv4()
		}
	} catch (err) {
		console.log(err)
	}
	return initialState
}

const setStore = (state:any) => {
	delete state.L;
	window.localStorage.setItem(config.appKey, JSON.stringify(state))
}

const setSessionStore = (state:any) => {
	let json = {} as any;
	try {
		let buf = window.sessionStorage.getItem(config.appKey)
		if (buf) json = JSON.parse(buf)
	} catch (error) {}
	window.sessionStorage.setItem(config.appKey, JSON.stringify({...json, ...state}))
}

const initialState: StoreObject = {
	theme:			'dark-theme',
	lang:			'en-US',
	// cookie:			'',
	loading:		false,
	connectedWallet:			{		// wallet connector
		address:		'',
		domain:			'',
		name:			'',
		showDialog:		false,
		connected:		false,
	},
	sfc: {
		owner: '',
		totalStake: 0,
		totalActiveStake: 0,
		minSelfStake: 0,
		minLockupDuration: 0,
		maxLockupDuration: 0,
		withdrawalPeriodTime: 0,
		withdrawalPeriodEpochs: 0,
		baseRewardPerSecond: 0,
		maxDelegatedRatio: 0,
		validatorCommission: 0,
		contractCommission: 0,
		unlockedRewardRatio: 0,
		totalSupply: 0,
	},
	wallets: [],
	validators: [],
	price: 0.06,
	contacts: [],
	validatorParam: {
		amount: 0,
		duration: 0,
	},
	delegationParam: {
		amount: 0,
		duration: 0,
	}
}

export const slice = createSlice({
	name: 'store',
	initialState: getStore(initialState),
	reducers: {
		update: (state: any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error(`undefined store key ${k}`)
				state[k] = action.payload[k]
			}
			setStore(state)
		},
		updateSession: (state: any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error(`undefined store key ${k}`)
				state[k] = action.payload[k]
			}
			setSessionStore(action.payload)
		}
	}
})

const useStore = () => {
	// const navigate = useNavigate()
	const G = useSelector((state: StoreObject) => state)
	const L = locales[G.lang]
	const dispatch = useDispatch()
	const update = (payload:Partial<StoreObject>) => dispatch(slice.actions.update(payload))
	const updateSession = (payload:Partial<StoreObject>) => dispatch(slice.actions.updateSession(payload))

	// const {sendJsonMessage} = useWebSocket(config.apiServer + '/' + config.apiKey + ':' + (G.cookie || ''), {
	// 	shouldReconnect: (closeEvent) => true,
	// 	onOpen: (e: WebSocketEventMap['open']) => {
	// 		console.log("socket connected")
	// 	},
	// 	onClose: (e: WebSocketEventMap['close']) => {
	// 		console.log("socket disconnected")
	// 	},
	// 	onMessage: async (e: WebSocketEventMap['message']) => {
	// 		try {
	// 			if (typeof e.data==="string") {
	// 				const { jsonrpc, id, result, error } = JSON.parse(decodeURI(e.data))
	// 				if (jsonrpc==="2.0" && typeof fns[id]==="function") {
	// 					await fns[id]({result, error})
	// 				}
	// 			}
	// 		} catch (error) {
				
	// 		}
	// 	},
	// 	onError: (e: WebSocketEventMap['error']) => {
	// 		console.log("socket error")
	// 	},
	// 	reconnectAttempts: 1000,
	// 	reconnectInterval: 5000,
	// 	share: true
	// })

	const getError = (code:number, args?:{[key:string]:string|number}|string|number) => T("error."+code, args)

	const T = (key:string, args?:{[key:string]:string|number}|string|number):string => {
		let text = L[key]
		if (text === undefined) throw new Error('Undefined lang key[' + key + ']')
		if (typeof args === 'string' || typeof args === 'number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else if (args){
			for(let k in args) text = text.replace(new RegExp('{'+k+'}', 'g'), String(args[k]))
		}
		return text
	}

	// const makeTransaction = async (password: string, contract: string, abi: any, method: string, params: any[], value?: string): Promise<{error?: string, tx?: any}> => {
	// 	try {
	// 		const w = G.wallets[G.currentWallet || 0]
	// 		if (!w) return {error: 'No selected wallet'}
	// 		let provider: ethers.Provider
	// 		let wallet: any
	// 		if (!!w.json) {
	// 			provider = new ethers.JsonRpcProvider(config.rpc)
	// 			const _wallet = fromEncryptedWallet(w.json, password)
	// 			wallet = _wallet.connect(provider);
	// 		} else if (window.ethereum) {
	// 			const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
	// 			provider = new ethers.BrowserProvider(window.ethereum)
	// 		} else {
	// 			return {error: 'wallet was not found'}
	// 		}
	// 		const _contract = new ethers.Contract(contract, typeof abi==='string' ? [abi] : abi, provider)
	// 		const data = _contract.interface.encodeFunctionData(method, params)
	// 		const transactionParameters = {
	// 			to: contract, // Required except during contract publications.
	// 			from: w.address, // must match user's active address.
	// 			value: value || '0x0', // Only required to send ether to the recipient from the initiating external account.
	// 			data,
	// 			chainId: '0x' + config.chainId.toString(16), // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
	// 		};
	// 		let tx = ''
	// 		if (!!wallet) {
	// 			// const __tx = await wallet.signTransaction(transactionParameters)
	// 			const _tx = await wallet.sendTransaction(transactionParameters);
	// 			tx = _tx.hash
	// 		} else {
	// 			tx = await window.ethereum.request({
	// 				method: 'eth_sendTransaction',
	// 				params: [transactionParameters],
	// 			});
	// 		}
	// 		return {tx}
	// 	} catch (error: any) {
	// 		if (error.code==='INVALID_ARGUMENT' && error.argument==='password') {
	// 			return {error: 'Please input correct wallet password.'}
	// 		} else if (error.code===4001) {
	// 			return {error: 'You have cancelled the action.'}
	// 		} else {
	// 			console.log('makeTransaction', error)
	// 			return {error: error.message as string}
	// 		}
	// 	}
	// }

	// const sendJson = (method:string, ...params:Array<any>):Promise<ServerResponse> => {
	// 	return new Promise(resolve=>{
	// 		const id = [+new Date(), Math.round(Math.random()*1e6)].join('')
	// 		const timer = setTimeout(()=>{
	// 			resolve({error:32001})
	// 			delete fns[id]
	// 		}, 60000)
	// 		fns[id] = async (response) => {
	// 			resolve(response)
	// 			delete fns[id]
	// 			clearTimeout(timer)
	// 		}
	// 		sendJsonMessage({
	// 			jsonrpc: "2.0",
	// 			method,
	// 			params: params || [],
	// 			id
	// 		})
	// 	})
	// }

	const timeAgo = (time:number):string => {
		if (time < 1e12) time *= 1000
		return timeAgos[G.lang].format(time)
	}

	// const setCookie = (extra?:Partial<StoreObject>) => {
	// 	const cookie = setDocumentCookie()
	// 	update({cookie, ...extra})
	// }

	// const logout = (extra?:Partial<StoreObject>) => {
	// 	setCookie({account:null, ...extra})
	// }

	const showLoading = (show: boolean) => update({loading: show})


	return {...G, T, timeAgo, /* makeTransaction, */ update, getError, updateSession, showLoading};
}

export default useStore
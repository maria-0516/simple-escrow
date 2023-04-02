declare interface Window {
	ethereum: 			any
}

declare interface WalletType {
	label: string
	address: string
	json?: string
	value: number	// available
	total: number	// available + staked
}

declare interface ValidatorType {
	id: number
	owner: string
	name: string
	icon: string
	website: string
	contact: string
	status: boolean
	totalStake: number
	selfStake: number
	delegatedStake: number
	lockedStake: number
	lockedEndTime: number
	lockedDuration: number
	withdrawRequestTime: number
	withdrawRequestAmount: number
	pendingRewards: number
	createdTime: number
}

declare interface DelegationInfo {
	validatorId: number
	address: string
	value: number
	// lockedValue: string
	// locked: number
	// withdrawn: string
	pendingRewards: number
	withdrawRequestTime: number
	withdrawRequestAmount: number
	timestamp: number
}

declare interface SFCType {
	owner: string
	totalStake: number
	totalActiveStake: number
	minSelfStake: number
	minLockupDuration: number
	maxLockupDuration: number
	withdrawalPeriodTime: number
	withdrawalPeriodEpochs: number
	baseRewardPerSecond: number
	maxDelegatedRatio: number
	validatorCommission: number
	contractCommission: number
	unlockedRewardRatio: number
	totalSupply: number
}

declare interface StoreObject {
	lang:				string
	theme:				string
	cookie?:			string
	loading:			boolean
	connectedWallet:			{		// wallet connector
		address:		string
		domain:			string
		name:			string
		showDialog:		boolean
		connected:		boolean
	},
	sfc: SFCType
	wallets: WalletType[]
	validators: ValidatorType[]
	price: number
	contacts: Array<{
		label: string
		address: string
	}>
	currentWallet?: 	number
	validatorParam: {
		amount: number
		duration: number
	}
	delegationParam: {
		amount: number
		duration: number
	}
	
	
}
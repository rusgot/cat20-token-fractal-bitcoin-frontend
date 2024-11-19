import {
	ProtocolState,
	OpenMinterState,
	CAT20State,
	GuardConstState
} from '@/lib/scrypt/contracts/dist'
import { UTXO } from 'scrypt-ts'

export interface ContractState<T> {
	protocolState: ProtocolState

	data: T
}

export interface Contract<T> {
	utxo: UTXO
	state: ContractState<T>
}

export type OpenMinterContract = Contract<OpenMinterState>

export type TokenContract = Contract<CAT20State>

export type GuardContract = Contract<GuardConstState>

import { OpenMinter, OpenMinterV2, FXPOpenMinter } from '@/lib/scrypt/contracts/dist'
import { MinterType } from './minter'

export const ArtifactsMD5 = new Map<string, MinterType>()

export function isOpenMinter(md5: string) {
	return (
		md5 === OpenMinter.getArtifact().md5 ||
		md5 === OpenMinterV2.getArtifact().md5 ||
		md5 === FXPOpenMinter.getArtifact().md5
	)
}

export function getMinterType(md5: string): MinterType {
	for (const [key, value] of ArtifactsMD5.entries()) {
		if (key === md5) {
			return value
		}
	}
	throw new Error(`No minterType found for md5: ${md5}`)
}

export function getMinterMd5(minterType: MinterType): string {
	for (const [key, value] of ArtifactsMD5.entries()) {
		if (value === minterType) {
			return key
		}
	}
	throw new Error(`No md5 found for minterType: ${minterType}`)
}

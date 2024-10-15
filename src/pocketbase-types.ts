/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Competences = "competences",
	Logiciels = "logiciels",
	Projets = "projets",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CompetencesRecord = {
	nom_competence?: string
}

export type LogicielsRecord = {
	logo_logiciel?: string
	nom_logiciel?: string
}

export type ProjetsRecord = {
	nom_projet?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CompetencesResponse<Texpand = unknown> = Required<CompetencesRecord> & BaseSystemFields<Texpand>
export type LogicielsResponse<Texpand = unknown> = Required<LogicielsRecord> & BaseSystemFields<Texpand>
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	competences: CompetencesRecord
	logiciels: LogicielsRecord
	projets: ProjetsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	competences: CompetencesResponse
	logiciels: LogicielsResponse
	projets: ProjetsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'competences'): RecordService<CompetencesResponse>
	collection(idOrName: 'logiciels'): RecordService<LogicielsResponse>
	collection(idOrName: 'projets'): RecordService<ProjetsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

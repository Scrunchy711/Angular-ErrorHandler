import { Action } from '@ngrx/store'


export enum ErrorActionTypes {
    STORE_ERROR = '[Error] Store Error',
    FIRESTORE_ERROR_SUCCESS = '[Error] Firestore Error Success',
    RESET_ERROR = '[Error] Reset Error'
}

export class StoreError implements Action {
    readonly type = ErrorActionTypes.STORE_ERROR

    constructor(public payload: {error: Error, error_message: string, error_stack: string, location: string}){}
}

export class FirestoreErrorSuccess implements Action {
    readonly type = ErrorActionTypes.FIRESTORE_ERROR_SUCCESS

}

export class ResetError implements Action {
    readonly type = ErrorActionTypes.RESET_ERROR

}


export type ErrorAction = StoreError |
            FirestoreErrorSuccess |
            ResetError 
import { Action } from '@ngrx/store'


export enum ErrorActionTypes {
    STORE_ERROR = '[Error] Store Error',
    RESET_ERROR = '[Error] Reset Error'
}

export class StoreError implements Action {
    readonly type = ErrorActionTypes.STORE_ERROR

    constructor(public payload: Error){}
}

export class ResetError implements Action {
    readonly type = ErrorActionTypes.RESET_ERROR

}


export type ErrorAction = StoreError |
            ResetError
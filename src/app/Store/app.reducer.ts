import { ErrorAction } from './app.actions';
import { ErrorActionTypes } from './app.actions'
import { createFeatureSelector, State } from '@ngrx/store';


export interface ErrorState {
    error: Error
}

const initialState: ErrorState = {
    error: undefined
}

export function ErrorReducer(state: ErrorState = initialState, action: ErrorAction ) {
    switch (action.type){
        case ErrorActionTypes.STORE_ERROR:
            console.log("Store Error Success")
            return {
                ...state,
                error: action.payload
            }
        case ErrorActionTypes.RESET_ERROR:
            return {
                initialState
            }
    }
}



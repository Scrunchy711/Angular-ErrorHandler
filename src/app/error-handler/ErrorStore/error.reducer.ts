
import { ErrorAction } from './error.actions';
import { ErrorActionTypes } from './error.actions'



export interface ErrorState {
    error: Error,
    error_message: string,
    error_stack: string,
    location: string
}

const initialState: ErrorState = {
    error: null,
    error_message: null,
    error_stack: null,
    location: null
}

export function ErrorReducer(state:ErrorState = initialState, action: ErrorAction ){
    switch (action.type){
        case ErrorActionTypes.STORE_ERROR:
            console.log("Store Error Success")
            return {
                error: action.payload.error,
                error_message: action.payload.error_message,
                error_stack: action.payload.error_stack,
                location: action.payload.location
                
            }

        case ErrorActionTypes.FIRESTORE_ERROR_SUCCESS:
            console.log(state)
            console.log(state.error.message)
            console.log(state.error.stack)
            return {
                ...state
            }
            
        case ErrorActionTypes.RESET_ERROR:
            return {
                ...state,
                initialState
            }
        
        default:
            return {
                ...state
            }
        
    }
}

export const getError = (state:ErrorState) => state.error
export const getErrorMessage = (state:ErrorState) => state.error_message
export const getErrorStack = (state:ErrorState) => state.error_stack
export const getLocation = (state:ErrorState) => state.location


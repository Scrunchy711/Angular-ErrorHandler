import * as fromError from '../app/error-handler/ErrorStore/error.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'


export interface State {
    error: fromError.ErrorState
}

export const reducers: ActionReducerMap<State> = {
   error: fromError.ErrorReducer
}

export const selectErrorState = createFeatureSelector<fromError.ErrorState>('error')

export const selectError = createSelector(selectErrorState,fromError.getError)
export const selectErrorMessage = createSelector(selectErrorState,fromError.getErrorMessage)
export const selectErrorStack = createSelector(selectErrorState,fromError.getErrorStack)
export const selectLocation = createSelector(selectErrorState,fromError.getLocation)

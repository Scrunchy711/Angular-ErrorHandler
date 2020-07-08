import { map, mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorhandlerService } from '../errorhandler.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StoreError, ErrorActionTypes, FirestoreErrorSuccess, ResetError } from './error.actions';

@Injectable()
export class ErrorHandlerEffects {

    constructor(
        private actions$ : Actions,
        private errorHandlerService : ErrorhandlerService
        ){}

        @Effect() fireStoreError$ = this.actions$
            .pipe(
                ofType<StoreError>(ErrorActionTypes.STORE_ERROR),
                map((data) => {
                    console.log(data)
                    this.errorHandlerService.firestoreError(data.payload.error,data.payload.location)
                    return new FirestoreErrorSuccess
                }
                )
            )

        @Effect() resetStoreError$ = this.actions$
                .pipe(
                    ofType<StoreError>(ErrorActionTypes.FIRESTORE_ERROR_SUCCESS),
                    map(
                        ()=> {return new ResetError}
                    )
                )
}
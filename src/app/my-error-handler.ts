import { StoreError } from './Store/app.actions';
import { ErrorState } from './Store/app.reducer';
import { Store } from '@ngrx/store';
import { ErrorHandler, Injectable } from '@angular/core';


@Injectable()
export class MyErrorHandler implements ErrorHandler{

  constructor(private store: Store<ErrorState>){}

  handleError(error){
    console.log(typeof error)
    console.log(error)
    // this.store.dispatch(new StoreError(error))
    
  }

}

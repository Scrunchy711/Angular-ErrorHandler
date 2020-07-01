import { StoreError } from './Store/app.actions';
import { Store } from '@ngrx/store';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error) {
    const store = this.injector.get(Store);
    console.log(typeof error);
    console.log(error);
    store.dispatch(new StoreError(error));
  }
}

import { StoreError } from './ErrorStore/error.actions';
import { Store } from '@ngrx/store';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class MyErrorHandler implements ErrorHandler{

  constructor(
    private injector: Injector,
    private snackBar: MatSnackBar
    ) {}

  handleError(error: Error) {
    const store = this.injector.get(Store);
    const router = this.injector.get(Router)
    console.log(error);
    // this.openSnackBar(error.message)
    store.dispatch(new StoreError({error: error,error_message: error.message, error_stack: error.stack, location: router.url}));
  }

  openSnackBar(message){
    let snackBarRef = this.snackBar.open(message,'Report', {duration: 3000})
    snackBarRef.onAction().subscribe(()=>{
      let router = this.injector.get(Router)
      router.navigate(['/error'])
    })
  }

  

}

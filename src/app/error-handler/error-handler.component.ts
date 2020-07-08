import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../global.app.reducer'



@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit, OnDestroy {
  
  constructor(private store: Store<fromRoot.State>) {}

  error$: Observable<Error> = null
  error: Error
  private errorSubscription: Subscription
  public error_message$: Observable<string>
  public error_stack: string = ""
  public errorLocation$: Observable<String> = null
  public errorMessage: string
  public errorStack: string

  ngOnInit(): void {
    this.errorSubscription = this.store.select(fromRoot.selectError)
      .subscribe((error:Error)=>{
        console.log(error)
        console.log(error.message)
        console.log(error.stack)
        this.errorMessage = error.message
        this.errorStack = error.stack
      })
    this.errorLocation$ = this.store.select(fromRoot.selectLocation)
    // console.log(this.error_message$)
    // this.error_message$.subscribe(data=>console.log(data))
    // this.errorSubscription = this.error$.subscribe((error:Error)=>{
    //   this.error = error.toString()
    // })
    // console.log(this.error)
    
    // this.location$ = this.store.select(store => store.location)
    // console.log(this.location$)
  }


  public sendEmail(){
    const form: HTMLFormElement = document.querySelector('#myform')
    console.log(form)
    emailjs.sendForm('Kenneth-gmail','test',form,'user_8z68QVe1ILQdC5Uh3nIjk')
      .then((result: EmailJSResponseStatus) =>{
        console.log(result.text)
      }, (error) =>{
        console.log(error.text)
      })
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe()
  }
}

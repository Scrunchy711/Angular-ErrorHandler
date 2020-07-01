import { Store } from '@ngrx/store';
import { ErrorState } from './Store/app.reducer';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bug-feature2';

  error: any
  constructor(private store: Store<ErrorState>){}

  sendData(){
    console.log("Data was sent")

  }

  getData(){
    console.log("Data was recieved")
    this.error = this.store.select(store=>store.error)
    console.log(this.error.payload.message)
    console.log(this.error.payload.stack)
    console.log(typeof this.error)
  }

}

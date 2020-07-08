import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sendError(){
    console.log("Data was sent")
    try {
      const a=b
    }
    catch (error){
      console.log ("Error caught in Try-catch block")
      throw error
    }
  }

  // getData(){
  //   console.log("Data was recieved")
  //   console.log(this.store)
  //   this.error = this.store.select(store=>store.error)
  //   console.log(this.error.payload.message)
  //   console.log(this.error.payload.stack)
  //   console.log(typeof this.error)
  // }

  sayHello(){
    console.log("Hello!")
  }

}

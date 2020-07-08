import { ErrorModal } from './error.modal';
import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase'




@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor( private database: AngularFireDatabase) { }

  private errorModal: ErrorModal
  
  firestoreError(error: Error, location: string){
    const date = new Date()
    this.errorModal = {
      user_name: "test",
      error_message: error.message,
      error_stack: error.stack,
      date: date.toString()
      // date: firebase.firestore.Timestamp.fromDate(new Date()).toDate()
    }
    console.log(this.errorModal)
    // this.firestore.collection("Error_History").add(this.errorModal)
    const errorHistory = this.database.list('Error_History')
    errorHistory.push(this.errorModal)
  }

}

import { ErrorHandlerEffects } from './ErrorStore/error.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { ErrorHandlerComponent } from './error-handler.component';
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyErrorHandler } from './my-error-handler';
import { OverlayModule } from '@angular/cdk/overlay';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import * as fromError from "./ErrorStore/error.reducer"



@NgModule({
  declarations: [ErrorHandlerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    OverlayModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    StoreModule.forFeature('error', fromError.ErrorReducer ),
    EffectsModule.forFeature([ErrorHandlerEffects])
    
    
    
  ],
  entryComponents: [ErrorHandlerComponent]
})
export class ErrorHandlerModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorHandlerModule,
      providers: [
        {provide: ErrorHandler, useClass: MyErrorHandler}
      ]
    }
  }
}
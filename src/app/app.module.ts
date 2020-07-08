import { reducers } from './global.app.reducer';
import { ErrorHandlerEffects } from './error-handler/ErrorStore/error.effects';
import { environment } from './../environments/environment';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonsComponent } from './buttons/buttons.component';
import { CommonModule } from '@angular/common';
import { ErrorHandlerModule } from './error-handler/error-handler.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ErrorHandlerModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([ErrorHandlerEffects]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

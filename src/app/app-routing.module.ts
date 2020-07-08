import { ButtonsComponent } from './buttons/buttons.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: ButtonsComponent},
  {path:'error', component: ErrorHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

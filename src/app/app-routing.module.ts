import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {HeaderComponent} from "./header/header.component";


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/Header',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'Header',
  //   component: HeaderComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

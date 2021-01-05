import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInputComponent} from './user-input/user-input.component';
import {DisplayResultComponent} from './display-result/display-result.component';
import {RouterModule} from '@angular/router';


const routes = [
  {path: "", component: UserInputComponent},
  {path:'userInput', component: UserInputComponent},
  {path:'result', component: DisplayResultComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [UserInputComponent, DisplayResultComponent];

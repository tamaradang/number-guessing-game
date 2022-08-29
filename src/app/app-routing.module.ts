import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewNumberComponent} from "./new-number/new-number.component";
import {RightAnswerComponent} from "./right-answer/right-answer.component";
import {SeeAnswerComponent} from "./see-answer/see-answer.component";
import {InputErrorComponent} from "./input-error/input-error.component";
import {TryAgainComponent} from "./try-again/try-again.component";

const routes: Routes = [
  {path: 'new-number', component: NewNumberComponent},
  {path: 'right-answer', component: RightAnswerComponent},
  {path: 'see-answer', component: SeeAnswerComponent},
  {path: 'input-error', component: InputErrorComponent},
  {path: 'try-again', component: TryAgainComponent},
  {path: '', redirectTo: 'new-number', pathMatch: 'full'},
  {path: '**', redirectTo: 'new-number'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNumberComponent } from './new-number/new-number.component';
import { FooterComponent } from './footer/footer.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { SeeAnswerComponent } from './see-answer/see-answer.component';
import { TryAgainComponent } from './try-again/try-again.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NewNumberComponent,
    FooterComponent,
    InputErrorComponent,
    RightAnswerComponent,
    SeeAnswerComponent,
    TryAgainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

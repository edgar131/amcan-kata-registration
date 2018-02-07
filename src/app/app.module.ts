import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import { ValidEmailDirective } from './valid-email.directive';
import { ValidPhoneDirective } from './valid-phone.directive';


@NgModule({
  declarations: [
    AppComponent,
    ValidEmailDirective,
    ValidPhoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {ValidEmailDirective} from './valid-email.directive';
import {ValidPhoneDirective} from './valid-phone.directive';
import {RouterModule, Routes} from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'payment', component: PaymentComponent}/*,
  {path: 'confirmation', component: ConfirmationComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    ValidEmailDirective,
    ValidPhoneDirective,
    PaymentComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appValidPhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidPhoneDirective, multi: true}]
})
export class ValidPhoneDirective implements Validator{
  validate(c: AbstractControl): ValidationErrors | any {
    const isValid = c.value != null && c.value.length >= 10 && /^[0-9\-]+$/.test(c.value);
    if (isValid) {
      return null;
    } else {
      return {
        validPhone: {
          valid: false
        }
      };
    }
  }

  constructor() { }

}

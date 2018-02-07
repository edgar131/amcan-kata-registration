import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appValidEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidEmailDirective, multi: true}]
})
export class ValidEmailDirective implements Validator {
  validate(c: AbstractControl): ValidationErrors | any {
    const isValid = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(c.value);
    if (isValid) {
      return null;
    } else {
      return {
        validEmail: {
          valid: false
        }
      };
    }
  }
}

import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css'],
})
export class FormFieldErrorComponent {
  @Input() placeholder: string = '';
  @Input() requiredErrorMessage: string = 'You must enter a value';
  @Input() emailErrorMessage: string = 'Not a valid email';

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return this.requiredErrorMessage;
    }

    return this.email.hasError('email') ? this.emailErrorMessage : '';
  }
}

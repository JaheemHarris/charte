import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormFieldErrorComponent } from './form-field-error.component';

@NgModule({
  declarations: [FormFieldErrorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  exports: [FormFieldErrorComponent],
})
export class FormFieldErrorModule {}

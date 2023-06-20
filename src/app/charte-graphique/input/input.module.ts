import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputModule } from './basic-input/basic-input.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { CheckRoundModule } from './check-round/check-round.module';
import { OutlineInputModule } from './outline-input/outline-input.module';
import { DatePickerModule } from './Date-picker/Date-picker.module';
import { FormFieldErrorModule } from './form-field-error/form-field-error.module';

@NgModule({
  imports: [
    CommonModule,
    BasicInputModule,
    CheckboxModule,
    CheckRoundModule,
    OutlineInputModule,
    DatePickerModule,
    FormFieldErrorModule
  ],
  declarations: [],
  exports: [BasicInputModule,CheckboxModule,CheckRoundModule,OutlineInputModule,DatePickerModule,FormFieldErrorModule]
})
export class InputModule { }

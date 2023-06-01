import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputModule } from './basic-input/basic-input.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    BasicInputModule,
    CheckboxModule
  ],
  declarations: [],
  exports: [BasicInputModule,CheckboxModule]
})
export class InputModule { }

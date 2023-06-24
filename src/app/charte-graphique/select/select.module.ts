import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSimpleModule } from './select-simple/select-simple.module';
import { SelectMultipleModule } from './select-multiple/select-multiple.module';

@NgModule({
  imports: [
    CommonModule,
    SelectSimpleModule,
    SelectMultipleModule
  ],
  declarations: [],
  exports: [SelectSimpleModule,SelectMultipleModule]
})
export class SelectModule { }

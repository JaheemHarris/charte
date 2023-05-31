import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputModule } from './basic-input/basic-input.module';

@NgModule({
  imports: [
    CommonModule,
    BasicInputModule
  ],
  declarations: [],
  exports: [BasicInputModule]
})
export class InputModule { }

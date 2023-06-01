import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputModule } from './basic-input/basic-input.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { CheckRoundModule } from './check-round/check-round.module';
import { OutlineInputModule } from './outline-input/outline-input.module';

@NgModule({
  imports: [
    CommonModule,
    BasicInputModule,
    CheckboxModule,
    CheckRoundModule,
    OutlineInputModule
  ],
  declarations: [],
  exports: [BasicInputModule,CheckboxModule,CheckRoundModule,OutlineInputModule]
})
export class InputModule { }

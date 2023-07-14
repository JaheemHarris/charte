import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesModule } from './lines/lines.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LinesModule
  ],
  exports: [
    LinesModule
  ]
})
export class GraphiqueModule { }

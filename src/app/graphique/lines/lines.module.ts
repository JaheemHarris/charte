import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTrendModule } from './line-trend/line-trend.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LineTrendModule
  ],
  exports: [
    LineTrendModule
  ]
})
export class LinesModule { }

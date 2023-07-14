import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTrendModule } from './line-trend/line-trend.module';
import { ErrorTrendModule } from './error-trend/error-trend.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LineTrendModule,
    ErrorTrendModule
  ],
  exports: [
    LineTrendModule,
    ErrorTrendModule
  ]
})
export class LinesModule { }

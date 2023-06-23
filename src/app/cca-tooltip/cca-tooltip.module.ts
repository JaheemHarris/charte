import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcaTooltipDirective } from './cca-tooltip.directive';



@NgModule({
  declarations: [ CcaTooltipDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    CcaTooltipDirective
  ]
})
export class CcaTooltipModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTooltipDirective } from './test-tooltip.directive';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

@NgModule({
  declarations: [TestTooltipDirective],
  imports: [MatTooltipModule],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 0,
        position: 'right'
      }
    }
  ],
  exports: [
    TestTooltipDirective
  ]
})
export class TestTooltipModule { }

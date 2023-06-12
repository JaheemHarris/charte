import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [TooltipComponent],
  exports: [TooltipComponent]
})
export class TooltipModule { }

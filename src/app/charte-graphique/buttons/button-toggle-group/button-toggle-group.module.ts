import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleGroupComponent } from './button-toggle-group.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  declarations: [ButtonToggleGroupComponent],
  exports: [ButtonToggleGroupComponent]
})
export class ButtonToggleGroupModule { }

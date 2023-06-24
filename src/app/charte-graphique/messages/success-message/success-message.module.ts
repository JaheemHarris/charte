import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SuccessMessageComponent } from './success-message.component';

@NgModule({
  declarations: [ SuccessMessageComponent ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ SuccessMessageComponent ]
})
export class SuccessMessageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ PrimaryButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ PrimaryButtonComponent ]
})
export class PrimaryButtonModule { }

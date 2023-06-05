import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './text-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [TextButtonComponent],
  exports: [TextButtonComponent]
})
export class TextButtonModule { }

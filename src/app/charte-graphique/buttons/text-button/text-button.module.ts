import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './text-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [TextButtonComponent],
  exports: [TextButtonComponent]
})
export class TextButtonModule { }

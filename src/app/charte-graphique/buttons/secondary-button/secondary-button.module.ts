import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryButtonComponent } from './secondary-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SecondaryButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [SecondaryButtonComponent]
})
export class SecondaryButtonModule { }

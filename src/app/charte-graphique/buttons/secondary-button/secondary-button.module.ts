import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryButtonComponent } from './secondary-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    SecondaryButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [SecondaryButtonComponent]
})
export class SecondaryButtonModule { }

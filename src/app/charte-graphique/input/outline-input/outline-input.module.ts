import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineInputComponent } from './outline-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: [OutlineInputComponent],
  exports: [OutlineInputComponent]
})
export class OutlineInputModule { }

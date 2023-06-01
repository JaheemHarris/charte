import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineInputComponent } from './outline-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [OutlineInputComponent],
  exports: [OutlineInputComponent]
})
export class OutlineInputModule { }

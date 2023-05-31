import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './basic-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [BasicInputComponent],
  exports: [BasicInputComponent]
})
export class BasicInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './basic-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  declarations: [BasicInputComponent],
  exports: [BasicInputComponent]
})
export class BasicInputModule { }

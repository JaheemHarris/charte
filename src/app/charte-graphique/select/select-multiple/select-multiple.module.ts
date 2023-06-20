import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMultipleComponent } from './select-multiple.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [SelectMultipleComponent],
  exports: [SelectMultipleComponent]
})
export class SelectMultipleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSimpleComponent } from './select-simple.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [SelectSimpleComponent],
  exports: [SelectSimpleComponent]
})
export class SelectSimpleModule { }

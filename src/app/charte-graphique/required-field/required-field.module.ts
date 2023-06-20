import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFieldComponent } from './required-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    
  ],
  declarations: [RequiredFieldComponent],
  exports: [RequiredFieldComponent]
})
export class RequiredFieldModule { }

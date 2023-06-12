import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule, 
    MatChipsModule,
    MatIconModule
  ],
  exports: [TagComponent]
})
export class TagModule { }

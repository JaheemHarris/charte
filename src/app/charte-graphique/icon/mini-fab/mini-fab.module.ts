import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniFabComponent } from './mini-fab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MiniFabComponent],
  exports: [MiniFabComponent]
})
export class MiniFabModule { }

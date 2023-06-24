import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [FabComponent],
  exports: [FabComponent]
})
export class FabModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicIconComponent } from './basic-icon.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [BasicIconComponent],
  exports: [BasicIconComponent]
})
export class BasicIconModule { }

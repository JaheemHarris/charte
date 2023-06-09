import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIconComponent } from './menu-icon.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [MenuIconComponent],
  exports: [MenuIconComponent]
})
export class MenuIconModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent]
})
export class MenuButtonModule { }

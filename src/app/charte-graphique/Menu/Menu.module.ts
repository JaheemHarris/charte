import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIconModule } from './menu-icon/menu-icon.module';
import { MenuButtonModule } from './menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    MenuIconModule,
    MenuButtonModule
  ],
  declarations: [],
  exports: [MenuIconModule,MenuButtonModule]
})
export class MenuModule { }

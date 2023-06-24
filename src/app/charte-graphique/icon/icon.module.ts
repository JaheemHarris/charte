import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicIconModule } from './basic-icon/basic-icon.module';
import { FabModule } from './fab/fab.module';
import { MiniFabModule } from './mini-fab/mini-fab.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicIconModule,
    FabModule,
    MiniFabModule
  ],
  exports: [BasicIconModule,FabModule,MiniFabModule]
})
export class IconModule { }

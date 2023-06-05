import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonModule } from './primary-button/primary-button.module';
import { SecondaryButtonModule } from './secondary-button/secondary-button.module';
import { TextButtonModule } from './text-button/text-button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
    TextButtonModule
  ],
  exports: [PrimaryButtonModule, SecondaryButtonModule, TextButtonModule]
})
export class ButtonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonModule } from './primary-button/primary-button.module';
import { SecondaryButtonModule } from './secondary-button/secondary-button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    SecondaryButtonModule
  ],
  exports: [PrimaryButtonModule, SecondaryButtonModule]
})
export class ButtonsModule { }

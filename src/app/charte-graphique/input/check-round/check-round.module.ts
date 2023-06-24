import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRoundComponent } from './check-round.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [
    CommonModule,
    MatRadioModule
  ],
  declarations: [CheckRoundComponent],
  exports: [CheckRoundComponent]
})
export class CheckRoundModule { }

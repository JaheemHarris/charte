import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';
import { ErrorMessageService } from './error-message.service';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ ErrorMessageComponent ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }

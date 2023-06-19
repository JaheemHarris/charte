import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageModule } from './error-message/error-message.module';
import { SuccessMessageModule } from './success-message/success-message.module';
import { InfoMessageModule } from './info-message/info-message.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    SuccessMessageModule,
    InfoMessageModule
  ],
  exports: [
    CommonModule,
    ErrorMessageModule,
    SuccessMessageModule,
    InfoMessageModule
  ],
})
export class MessagesModule { }

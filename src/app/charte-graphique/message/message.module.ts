import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageModule { }

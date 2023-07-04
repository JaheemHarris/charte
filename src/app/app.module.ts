import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from './buttons/buttons.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { MessagesModule } from './messages/messages.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CcaTooltipDirective } from './cca-tooltip/cca-tooltip.directive';
import { CcaTooltipModule } from './cca-tooltip/cca-tooltip.module';
import { TestTooltipModule } from './test-tooltip/test-tooltip.module';
import { DragDropFileUploadModule } from './drag-drop-file-upload/drag-drop-file-upload.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    TooltipModule,
    MessagesModule,
    MatSnackBarModule,
    MatTooltipModule,
    CcaTooltipModule,
    TestTooltipModule,
    DragDropFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from './tooltip/tooltip.module';
import { ButtonsModule } from './charte-graphique/buttons/buttons.module';
import { MessagesModule } from './messages/messages.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CcaTooltipDirective } from './cca-tooltip/cca-tooltip.directive';
import { CcaTooltipModule } from './cca-tooltip/cca-tooltip.module';


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
    CcaTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

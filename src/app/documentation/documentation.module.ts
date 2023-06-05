import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonsModule } from '../charte-graphique/buttons/buttons.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { IconModule } from '../charte-graphique/icon/icon.module';
import { BasicInputModule } from '../charte-graphique/input/basic-input/basic-input.module';
import { CheckboxModule } from '../charte-graphique/input/checkbox/checkbox.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CheckRoundModule } from '../charte-graphique/input/check-round/check-round.module';
import { OutlineInputModule } from '../charte-graphique/input/outline-input/outline-input.module';
import { FormsModule } from '@angular/forms';
import { SelectSimpleModule } from '../charte-graphique/select/select-simple/select-simple.module';
import { SelectMultipleModule } from '../charte-graphique/select/select-multiple/select-multiple.module';
import { DatePickerModule } from '../charte-graphique/input/Date-picker/Date-picker.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    ButtonsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    IconModule,
    BasicInputModule,
    CheckboxModule,
    MatToolbarModule,
    CheckRoundModule,
    OutlineInputModule,
    FormsModule,
    SelectSimpleModule,
    SelectMultipleModule,
    DatePickerModule
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule { }

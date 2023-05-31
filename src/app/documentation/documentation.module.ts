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
    BasicInputModule
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule { }

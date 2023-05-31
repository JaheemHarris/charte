import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonsModule } from '../charte-graphique/buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    ButtonsModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule { }

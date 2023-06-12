import { InputComponent } from './Input/Input.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectSimpleModule } from '../charte-graphique/select/select-simple/select-simple.module';
import { SelectMultipleModule } from '../charte-graphique/select/select-multiple/select-multiple.module';
import { DatePickerModule } from '../charte-graphique/input/Date-picker/Date-picker.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BoutonComponent } from './Bouton/Bouton.component';
import { IconComponent } from './Icon/Icon.component';
import { FontComponent } from './Font/Font.component';
import { SelectComponent } from './select/select.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MenuModule } from '../charte-graphique/Menu/Menu.module';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { FontModule } from '../charte-graphique/font/font.module';
import { TagModule } from '../charte-graphique/tag/tag.module';
import { TagComponent } from './Tag/Tag.component';
import { TooltipModule } from '../charte-graphique/tooltip/tooltip.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarModule } from '../charte-graphique/toolbar/toolbar.module';
import { ToolbarComponent } from './Toolbar/Toolbar.component';
import { SidebarModule } from '../charte-graphique/sidebar/sidebar.module';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    DatePickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonToggleModule,
    MenuModule,
    MatMenuModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FontModule,
    TagModule,
    TooltipModule,
    ToolbarModule,
    SidebarModule
  ],
  declarations: [
    DocumentationComponent,
    BoutonComponent, 
    IconComponent, 
    InputComponent,
    FontComponent,
    SelectComponent,
    ToggleComponent,
    CheckboxComponent,
    MenuComponent,
    TagComponent,
    TooltipComponent,
    ToolbarComponent,
    SidebarComponent
  ]
})
export class DocumentationModule { }

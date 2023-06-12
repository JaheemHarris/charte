import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { InputComponent } from './Input/Input.component';
import { IconComponent } from './Icon/Icon.component';
import { BoutonComponent } from './Bouton/Bouton.component';
import { FontComponent } from './Font/Font.component';
import { SelectComponent } from './select/select.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MenuComponent } from './menu/menu.component';
import { TagComponent } from './Tag/Tag.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarComponent } from './Toolbar/Toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        redirectTo: 'bouton',
        pathMatch: 'full',
      },
      {
        path: 'input', // child route path
        component: InputComponent, // child route component that the router renders
      },
      {
        path: 'bouton', // child route path
        component: BoutonComponent, // child route component that the router renders
      },
      {
        path: 'icon', // child route path
        component: IconComponent, // child route component that the router renders
      },
      {
        path: 'font', // child route path
        component: FontComponent, // child route component that the router renders
      },
      {
        path: 'select', // child route path
        component: SelectComponent, // child route component that the router renders
      },
      {
        path: 'toggle', // child route path
        component: ToggleComponent, // child route component that the router renders
      },
      {
        path: 'checkbox', // child route path
        component: CheckboxComponent, // child route component that the router renders
      },
      {
        path: 'menu', // child route path
        component: MenuComponent, // child route component that the router renders
      },
      {
        path: 'tag', // child route path
        component: TagComponent, // child route component that the router renders
      },
      {
        path: 'tooltip', // child route path
        component: TooltipComponent, // child route component that the router renders
      },
      {
        path: 'toolbar', // child route path
        component: ToolbarComponent, // child route component that the router renders
      },
      {
        path: 'sidebar', // child route path
        component: SidebarComponent, // child route component that the router renders
      },
      { path: '**', redirectTo: 'documentation' },
    ],
  },
  { path: '**', redirectTo: 'documentation' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}

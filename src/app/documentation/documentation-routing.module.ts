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
import { StepperComponent } from './stepper/stepper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ChampsObliComponent } from './champsObli/champsObli.component';
import { FormFieldErrorComponent } from '../charte-graphique/input/form-field-error/form-field-error.component';
import { ErrorSuccessComponent } from './error-success/error-success.component';
import { CouleurComponent } from './couleur/couleur.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        redirectTo: 'couleur',
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
      {
        path: 'stepper', // child route path
        component: StepperComponent, // child route component that the router renders
      },
      {
        path: 'snackbar', // child route path
        component: SnackbarComponent, // child route component that the router renders
      },
      {
        path: 'pagination', // child route path
        component: PaginationComponent, // child route component that the router renders
      },
      {
        path: 'champs-obligatoire', // child route path
        component: ChampsObliComponent, // child route component that the router renders
      },
      {
        path: 'input-error', // child route path
        component: FormFieldErrorComponent, // child route component that the router renders
      },
      {
        path: 'success-error', // child route path
        component: ErrorSuccessComponent, // child route component that the router renders
      },
      {
        path: 'couleur', // child route path
        component: CouleurComponent, // child route component that the router renders
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

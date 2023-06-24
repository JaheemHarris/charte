import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private router: Router) { }
  
  ngOnInit() {}

  navigateButton() {
    this.router.navigate(['/general/bouton']);
  }

  navigatePaginator() {
    this.router.navigate(['/general/pagination']);
  }

  navigateChampsObli() {
    this.router.navigate(['/general/champs-obligatoire']);
  }

  navigateCouleur() {
    this.router.navigate(['/general/couleur']);
  }

  successerror () {
    this.router.navigate(['/general/success-error']);
  }

  navigateModal() {
    this.router.navigate(['/general/modal']);
  }

  navigateInputError() {
    this.router.navigate(['/general/input-error']);
  }

  navigateSidebar() {
    this.router.navigate(['/general/sidebar']);
  }

  navigateSnackbar() {
    this.router.navigate(['/general/snackbar']);
  }

  navigateStepper() {
    this.router.navigate(['/general/stepper']);
  }

  navigateToolbar() {
    this.router.navigate(['/general/toolbar']);
  }

  navigateTag() {
    this.router.navigate(['/general/tag']);
  }

  navigateTooltip() {
    this.router.navigate(['/general/tooltip']);
  }

  navigatecheck() {
    this.router.navigate(['/general/checkbox']);
  }

  navigateFont() {
    this.router.navigate(['/general/font']);
  }

  navigateIcon() {
    this.router.navigate(['/general/icon']);
  }

  navigateInput() {
    this.router.navigate(['/general/input']);
  }

  navigateMenu() {
    this.router.navigate(['/general/menu']);
  }

  navigateSelect() {
    this.router.navigate(['/general/select']);
  }

  navigateToggle() {
    this.router.navigate(['/general/toggle']);
  }
  
  handleButtonClick() {
    console.log('Le bouton a été cliqué depuis le composant parent');
  }
  
  handleRedialClick() {
    console.log('Redial a été sélectionné depuis le composant parent');
  }
  
  handleVoicemailClick() {
    console.log('Check voice mail a été sélectionné depuis le composant parent');
  }
  
  handleDisableAlertsClick() {
    console.log('Disable alerts a été sélectionné depuis le composant parent');
  }
  
}
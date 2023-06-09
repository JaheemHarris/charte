import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  list: any[] = [
    { icon: 'dialpad', label: 'Redial' },
    { icon: 'voicemail', label: 'Check voice mail', disabled: true },
    { icon: 'notifications_off', label: 'Disable alerts' }
  ];

  constructor(private router: Router) { }
  
  ngOnInit() {}

  navigateButton() {
    this.router.navigate(['/general/bouton']);
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
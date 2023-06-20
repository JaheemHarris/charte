import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  list: any[] = [
    { icon: 'home', label: 'Home' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'help', label: 'Help' }
  ];

  action: any[] = [
    { icon: 'edit', label: 'Edit' },
    { icon: 'delete', label: 'Delete' },
    { icon: 'close', label: 'Close' },
    { icon: 'archive', label: 'Archive' },
    { icon: 'share', label: 'Share' }
  ];

  buttonLabel = 'Menu';
  menuItems: MenuItem[] = [
    { label: 'Item 1', action: () => console.log('Action de l\'item 1') },
    { label: 'Item 2', action: () => console.log('Action de l\'item 2') },
  ];

  onMenuItemClicked(item: MenuItem) {
    item.action();
  }

  constructor() { }
  
  ngOnInit() {}
  
  handleButtonClick() {
    console.log('Le bouton a été cliqué depuis le composant parent');
  }
  
  handleHomeClick() {
    console.log('Home a été sélectionné depuis le composant parent');
  }
  
  handleSettingsClick() {
    console.log('Settings a été sélectionné depuis le composant parent');
  }
  
  handleHelpClick() {
    console.log('Help a été sélectionné depuis le composant parent');
  }

  EditClick(){
    console.log('Edit action');    
  }
  
  DeleteClick(){
    console.log('Delete action');   
  }
        
  CloseClick(){
    console.log('Close action');   
  }
  
  ArchiveClick(){
    console.log('Archive action');   
  }
        
  ShareClick(){
    console.log('Share action');   
  }
  
}

interface MenuItem {
  label: string;
  action: () => void;
}
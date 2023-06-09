import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input() buttonLabel: string ='';
  @Input() menuItems: MenuItem[]=[];
  @Output() menuItemClicked: EventEmitter<any> = new EventEmitter<any>();

  onMenuItemClick(item: MenuItem) {
    this.menuItemClicked.emit(item);
  }
  
  constructor() { }

  ngOnInit() {
  }

}

interface MenuItem {
  label: string;
  action: () => void;
}
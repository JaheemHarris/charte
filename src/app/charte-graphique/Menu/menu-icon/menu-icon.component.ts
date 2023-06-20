import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'flat-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css']
})
export class MenuIconComponent implements OnInit {

  @Input() menuItems: any[] = [];
  @Input() type: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() redialClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() voicemailClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() disableAlertsClick: EventEmitter<void> = new EventEmitter<void>();

  @Output() editclick: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteclick: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeclick: EventEmitter<void> = new EventEmitter<void>();
  @Output() archiveclick: EventEmitter<void> = new EventEmitter<void>();
  @Output() shareclick: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClick() {
    this.buttonClick.emit();
  }

  hoveredButtonIndex: number = -1;

handleMenuItemHover(index: number) {
  this.hoveredButtonIndex = index;
}

handleMenuItemLeave() {
  this.hoveredButtonIndex = -1;
}
  
  handleMenuItemSelect(item: any) {
    if (this.type === 'config') {
      switch (item.label) {
        case 'Home':
          this.redialClick.emit();
          break;
        case 'Settings':
          this.voicemailClick.emit();
          break;
        case 'Help':
          this.disableAlertsClick.emit();
          break;
        default:
          break;
      }
    } else if (this.type === 'action') {
      switch (item.label) {
        case 'Edit':
          this.editclick.emit();
          break;
        case 'Delete':
          this.deleteclick.emit();
          break;
          case 'Close':
          this.closeclick.emit();
          break;
        case 'Archive':
          this.archiveclick.emit();
          break;
        case 'Share':
          this.shareclick.emit();
          break;
        default:
          break;
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'flat-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.css']
})
export class ButtonToggleGroupComponent {
  @Input() options: any[] = [];
  @Input() type:string = '';

  toggleButtonColor(clickedOption: any) {
    this.options.forEach(option => {
      option.active = option === clickedOption;
      option.separatorVisible = option !== clickedOption;
    });
  }
  
  
}

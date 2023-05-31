import { Component, Input } from '@angular/core';
import { SecondaryButtonType } from './secondary-button.type';

@Component({
  selector: 'cca-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent {

  @Input() type: SecondaryButtonType = 'primary';

}

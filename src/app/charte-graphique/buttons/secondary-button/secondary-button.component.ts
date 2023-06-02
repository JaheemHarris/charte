import { Component, Input } from '@angular/core';
import { SecondaryButtonType } from './secondary-button.type';

@Component({
  selector: 'flat-button-secondary',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent {

  @Input() type: SecondaryButtonType = 'primary';

}

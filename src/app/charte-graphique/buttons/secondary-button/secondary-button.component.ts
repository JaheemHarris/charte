import { Component, Input } from '@angular/core';
import { PrimaryButtonType } from '../primary-button/primary-button.type';

@Component({
  selector: 'cca-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent {

  @Input() type: PrimaryButtonType = 'primary';

}

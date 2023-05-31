import { Component, Input } from '@angular/core';
import { PrimaryButtonType } from './primary-button.type';

@Component({
  selector: 'cca-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {

  @Input() type: PrimaryButtonType = 'primary';

}

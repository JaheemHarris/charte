import { Component, Input } from '@angular/core';
import { PrimaryButtonType } from './primary-button.type';

@Component({
  selector: 'flat-button-primary',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {

  @Input() type: PrimaryButtonType = 'primary';
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() buttonSize: string= '';

}

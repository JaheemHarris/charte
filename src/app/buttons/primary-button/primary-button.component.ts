import { Component, Input } from '@angular/core';

@Component({
  selector: 'cca-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
  @Input() type : string = "primary";
}

import { Component, ViewEncapsulation } from '@angular/core';
import { ErrorMessageService } from './messages/error-message/error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'charte';

  constructor() {}
}

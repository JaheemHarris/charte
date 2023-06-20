import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessageComponent } from './messages/error-message/error-message.component';
import { ErrorMessageService } from './messages/error-message/error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'charte';

  durationInSeconds = 5;

  constructor(private errorMessageService: ErrorMessageService) {}


  openSnackBar(){
    this.errorMessageService.show('This is a custom snackbar message.', 'Close');
  }
}

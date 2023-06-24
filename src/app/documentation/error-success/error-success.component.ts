import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from 'src/app/charte-graphique/messages/error-message/error-message.service';
import { SuccessMessageService } from 'src/app/charte-graphique/messages/success-message/success-message-service';

@Component({
  selector: 'app-error-success',
  templateUrl: './error-success.component.html',
  styleUrls: ['./error-success.component.css']
})
export class ErrorSuccessComponent implements OnInit {

  constructor(
    private errorMessageService: ErrorMessageService,
    private successMessageService : SuccessMessageService
  ) { }

  ngOnInit() {
  }

  openSnackBar(){
    this.errorMessageService.show('This is a custom snackbar message.', 'Close', 'top');
  }

  openSuccess(){
    this.successMessageService.show('This is a custom snackbar message.', 'close', 'bottom')
  }

}

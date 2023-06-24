import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.css']
})
export class ErrorMessageComponent {
    @Input() title: string = "Error";
    @Input() message!: string;
    @Input() action!: string;
    @Input() position: 'top' | 'bottom' = 'bottom';

    @Output() dismissed = new EventEmitter<void>();

    constructor (private service : ErrorMessageService) {}

    dismiss(){
        // this.dismissed.emit();
        setTimeout(() => this.service.hide());
    }
}

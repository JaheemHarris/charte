import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: 'error-message.component.html',
  styleUrls: ['error-message.component.css']
})
export class ErrorMessageComponent {
    @Input() title: string = "Error";
    @Input() message!: string;
    @Input() action!: string;
    @Output() dismissed = new EventEmitter<void>();

    dismiss(){
        this.dismissed.emit();
    }
}

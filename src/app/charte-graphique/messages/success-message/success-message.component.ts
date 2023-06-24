import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuccessMessageService } from './success-message-service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent {

  @Input() title: string = "Success";
  @Input() message!: string;
  @Input() action!: string;
  @Input() position: 'top' | 'bottom' = 'bottom';

  @Output() dismissed = new EventEmitter<void>();

  constructor(private service: SuccessMessageService) {}

  dismiss() {
    setTimeout(() => this.service.hide());
  }
  
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cca-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent implements OnInit {

  @Input() type: string = 'primary';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
  inputValue: string = '';

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    this.valueChanged.emit(this.inputValue);
  }

  clearInput() {  
    this.inputValue = '';
    this.valueChanged.emit(this.inputValue);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cca-outline-input',
  templateUrl: './outline-input.component.html',
  styleUrls: ['./outline-input.component.css']
})
export class OutlineInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() type: string = '';
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

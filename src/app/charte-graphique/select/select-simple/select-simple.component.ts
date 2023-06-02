import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cca-select-simple',
  templateUrl: './select-simple.component.html',
  styleUrls: ['./select-simple.component.css']
})
export class SelectSimpleComponent implements OnInit {

  @Input() label : string = ''
  @Input () list: any[] = [];
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  onSelectionChange(value: any) {
    this.valueChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}

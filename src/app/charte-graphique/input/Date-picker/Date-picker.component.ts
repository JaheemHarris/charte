import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'flat-date-picker',
  templateUrl: './Date-picker.component.html',
  styleUrls: ['./Date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  selectedDate!: Date;

  onDateChange(event: any) {
    this.selectedDate = event.value;
    const formattedDate = moment(this.selectedDate);
    this.dateChange.emit(formattedDate);
  }
  

  constructor(){}

  ngOnInit() {
  }

}

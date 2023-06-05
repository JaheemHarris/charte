import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'cca-Date-picker',
  templateUrl: './Date-picker.component.html',
  styleUrls: ['./Date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() dateSelected: EventEmitter<Date> = new EventEmitter<Date>();

  onDateChange(event: MatDatepickerInputEvent<Date | null>) {
    if (event.value) {
      this.dateSelected.emit(event.value);
    }
  }

  constructor(){}

  ngOnInit() {
  }

}

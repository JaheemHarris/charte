import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cca-date-picker',
  templateUrl: './Date-picker.component.html',
  styleUrls: ['./Date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() dateSelected: EventEmitter<Date> = new EventEmitter<Date>();
  
  selectedDate: Date | null = null;

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }

  constructor(){}

  ngOnInit() {
  }

}

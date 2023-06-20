import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'flat-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.css']
})
export class SelectMultipleComponent implements OnInit {

  @Input() label: string = '';
  @Input() type: string = '';
  @Input() toppings = new FormControl('');
  @Input() toppingList: string[] = [];
  @Output() selectedValuesChanged = new EventEmitter<string[]>();

  //Select thematics
  @Input() options: string[] = [];
  @Output() selectedValuesThematicsChange = new EventEmitter<string[]>();
  selectedOptions = new FormControl();

  removeOptionThematics(option: string) {
    const index = this.selectedOptions.value.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.value.splice(index, 1);
      this.selectedOptions.setValue(this.selectedOptions.value);
    }
    this.emitSelectedValuesThematics();
  }

  onSelectionThematicsChange() {
    this.emitSelectedValuesThematics();
  }

  private emitSelectedValuesThematics() {
    this.selectedValuesThematicsChange.emit(this.selectedOptions.value);
  }
  //Find select thematics
  
  onSelectionChange(): void {
    const value = this.toppings.value;
    let selectedValues: string[];
  
    if (Array.isArray(value)) {
      selectedValues = value as string[];
    } else if (typeof value === 'string') {
      selectedValues = [value];
    } else {
      selectedValues = [];
    }
  
    this.selectedValuesChanged.emit(selectedValues);
  }
  
  
  
  constructor() { }

  ngOnInit() {
  }

}

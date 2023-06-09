import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.css']
})
export class SelectMultipleComponent implements OnInit {

  @Input() label: string = '';
  @Input() type: string = '';
  @Input() toppings = new FormControl('');
  @Input() toppingList: string[] = [];
  @Output() selectedValuesChanged = new EventEmitter<string[]>();

  
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

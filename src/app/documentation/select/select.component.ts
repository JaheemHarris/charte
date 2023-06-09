import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  list: any[] = [
    {value: '0', viewValue: 'Steak'},
    {value: '1', viewValue: 'Pizza'},
    {value: '2', viewValue: 'Tacos'},
    {value: '3', viewValue: 'Panini'}
  ];

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  inputValue: string = '';

  constructor() { }

  logSelectedValues(selectedValues: string[]): void {
    console.log('Selected values in parent:', selectedValues);
  }

  onValueChange(value: any) {
    console.log('Selected value:', value);
    // Faites ce que vous voulez avec la valeur sélectionnée ici
  }
  
  onInputValueChanged(value: string) {
    this.inputValue = value;
    console.log('Input value:', this.inputValue);    
    // Faites autre chose avec la valeur de l'input
  }

  ngOnInit() {
  }

}

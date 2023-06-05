import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  
  list: any[] = [
    {value: '0', viewValue: 'Steak'},
    {value: '1', viewValue: 'Pizza'},
    {value: '2', viewValue: 'Tacos'},
    {value: '3', viewValue: 'Panini'}
  ];
  inputValue: string = '';
  inputValueText: string = '';
  inputOutValueText: string ='';
  inputOutValueSimple: string ='';

  constructor() { }
  
  ngOnInit() {}
  
  onValueChange(value: any) {
    console.log('Selected value:', value);
    // Faites ce que vous voulez avec la valeur sélectionnée ici
  }
  
  onInputValueChanged(value: string) {
    this.inputValue = value;
    console.log('Input value:', this.inputValue);
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedtext(value: string) {
    this.inputValueText = value;
    console.log('Input value Text:', this.inputValueText);
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedSimple(value: string) {
    this.inputOutValueSimple = value;
    console.log('Outline value Text:', this.inputOutValueSimple);
    // Faites autre chose avec la valeur de l'input
  }

  onInputValueChangedOutText(value: string) {
    this.inputOutValueText = value;
    console.log('Outline value Text:', this.inputOutValueText);
    // Faites autre chose avec la valeur de l'input
  }

}

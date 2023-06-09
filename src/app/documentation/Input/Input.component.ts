import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})
export class InputComponent implements OnInit {

  inputValue: string = '';
  inputValueText: string = '';
  inputOutValueText: string ='';
  inputOutValueSimple: string ='';

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  
  constructor() { }

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

  ngOnInit() {
  }

}

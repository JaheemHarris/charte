import { Component, OnInit } from '@angular/core';  
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleFormValuesChange(formValues: any): void {
    // Logique pour traiter les valeurs du formulaire
    console.log('Form values:', formValues);
    // Vous pouvez effectuer d'autres opérations avec les valeurs du formulaire ici
  }

}

import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'flat-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @Input() stepperOrientation!: StepperOrientation;
  @Input() step1Label: string = '';
  @Input() step1ErrorMessage: string = '';
  @Input() step1Placeholder: string = '';
  @Input() step1FormControlValue: string = '';
  @Input() step1NextButtonText: string = '';
  @Input() step2Label: string = '';
  @Input() step2ErrorMessage: string = '';
  @Input() step2Placeholder: string = '';
  @Input() step2FormControlValue: string = '';
  @Input() step2BackButtonText: string = '';
  @Input() step2NextButtonText: string = '';
  @Input() finalStepLabel: string = '';
  @Input() finalStepMessage: string = '';
  @Input() finalStepBackButtonText: string = '';
  @Input() resetButtonText: string = '';

  @Output() formValuesChange: EventEmitter<any> = new EventEmitter<any>();

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [this.step1FormControlValue, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: [this.step2FormControlValue, Validators.required]
    });
  }

  onSubmit(): void {
    const formValues = {
      step1Value: this.firstFormGroup.value.firstCtrl,
      step2Value: this.secondFormGroup.value.secondCtrl
    };

    this.formValuesChange.emit(formValues);
  }
}

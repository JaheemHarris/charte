import { Component } from '@angular/core';

@Component({
  selector: 'app-required-field',
  template: `
    <mat-form-field>
      <mat-label>
        <span class="required-field">*</span> Field 1
      </mat-label>
      <input matInput [required]="true" [(ngModel)]="field1">
    </mat-form-field>

    <mat-form-field>
      <mat-label>
        <span class="required-field">*</span> Field 2
      </mat-label>
      <input matInput [required]="true" [(ngModel)]="field2">
    </mat-form-field>

    <div *ngIf="isFormInvalid" class="error-message">
      (*) Field required
    </div>
  `,
  styles: [`
    .required-field {
      color: red;
    }

    .error-message {
      color: red;
      font-style: italic;
      margin-top: 8px;
      border: 1px solid red;
      padding: 4px;
    }
  `]
})
export class RequiredFieldComponent {
  field1: string = '';
  field2: string = '';
  
  get isFormInvalid(): boolean {
    return !this.field1 || !this.field2;
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'flat-message',
  template: `
    <div class="toast-content">
      <div class="left-content">
        <div class="icon-success">
          <mat-icon>check_circle</mat-icon>
        </div>
        <div class="text-content">
          <span class="highlight">5mm</span>
          <span class="text-success">Success</span>
          <span>Your application has been sent.</span>
        </div>
      </div>
      <div class="right-content">
        <div class="bar-vertical"></div>
        <div class="close-button">
          <button mat-icon-button (click)="dismiss()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .toast-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      background-color: #2ecc71;
      color: #fff;
      padding: 16px;
      border-radius: 4px;
    }

    .left-content {
      display: flex;
      align-items: center;
    }

    .icon-success {
      margin-right: 8px;
    }

    .text-content {
      display: flex;
      flex-direction: column;
    }

    .highlight {
      color: #fff;
      font-weight: bold;
    }

    .text-success {
      color: #fff;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .right-content {
      display: flex;
      align-items: center;
    }

    .bar-vertical {
      width: 1px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      margin-right: 8px;
    }

    .close-button {
      margin-left: 8px;
    }
    `
  ]
})
export class MessageComponent {
  appellation: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<MessageComponent>
  ) {
    this.appellation = data.appellation;
  }

  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}

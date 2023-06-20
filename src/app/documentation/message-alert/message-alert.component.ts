import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MessageComponent } from 'src/app/charte-graphique/message/message.component';


@Component({
  selector: 'app-example',
  template: `
    <button mat-raised-button (click)="openCustomSnackbar()">Afficher le Snackbar personnalisé</button> <br> <br> <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
  Pool party!
</button> <br> <br>
<button mat-raised-button color="primary" (click)="showToastr()">Show Toastr</button>
  `,
  styleUrls: ['./message-alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageAlertComponent {
  constructor(private snackBar: MatSnackBar) { }

  openCustomSnackbar(): void {
    const message = 'Message avec une icône personnalisée';
    const icon = 'my-icon';
    this.snackBar.openFromComponent(MessageComponent, { data: { message, icon } });
  }

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    
    openSnackBar() {
      this.snackBar.open('', 'Splash', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['custom-snackbar']
      });
    }

    showToastr(): void {
      this.snackBar.openFromComponent(MessageComponent, {
        data: { 
          appellation: 'Toast Title'  // Appellation ou titre du toastr
        },
        duration: 3000
      });
    }
}
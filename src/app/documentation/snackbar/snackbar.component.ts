import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBarNormal() {
    this._snackBar.open('message', 'ok');
  }

  openSnackBarDroite() {
    this._snackBar.open('message', 'ok', {
      duration: 2000,  // Durée pendant laquelle le snackbar est affiché (en millisecondes)
      horizontalPosition: 'end',  // Position horizontale du snackbar ('start', 'center', 'end' ou 'left', 'right')
      verticalPosition: 'bottom',  // Position verticale du snackbar ('top' ou 'bottom')
    });
  }

  openSnackBarDroiteHaut() {
    this._snackBar.open('message', 'ok', {
      duration: 2000,  // Durée pendant laquelle le snackbar est affiché (en millisecondes)
      horizontalPosition: 'end',  // Position horizontale du snackbar ('start', 'center', 'end' ou 'left', 'right')
      verticalPosition: 'top',  // Position verticale du snackbar ('top' ou 'bottom')
    });
  }

  openSnackBarGauche() {
    this._snackBar.open('message', 'ok', {
      duration: 2000,  // Durée pendant laquelle le snackbar est affiché (en millisecondes)
      horizontalPosition: 'left',  // Position horizontale du snackbar ('start', 'center', 'end' ou 'left', 'right')
      verticalPosition: 'top',  // Position verticale du snackbar ('top' ou 'bottom')
    });
  }

  openSnackBarGaucheBas() {
    this._snackBar.open('message', 'ok', {
      duration: 2000,  // Durée pendant laquelle le snackbar est affiché (en millisecondes)
      horizontalPosition: 'left',  // Position horizontale du snackbar ('start', 'center', 'end' ou 'left', 'right')
      verticalPosition: 'bottom',  // Position verticale du snackbar ('top' ou 'bottom')
    });
  }

  openSnackBarStart() {
    this._snackBar.open('message', 'ok', {
      duration: 2000,  // Durée pendant laquelle le snackbar est affiché (en millisecondes)
      horizontalPosition: 'center',  // Position horizontale du snackbar ('start', 'center', 'end' ou 'left', 'right')
      verticalPosition: 'top',  // Position verticale du snackbar ('top' ou 'bottom')
    });
  }

  ngOnInit() {
  }

}

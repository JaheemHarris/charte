import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <!-- Contenu du premier exemplaire de pagination avec style par défaut -->
    <app-paginator
      [currentPage]="currentPage1"
      [totalPages]="totalPages1"
      [model]="'model1'"
      (pageChange)="handlePageChange1($event)"
    ></app-paginator>

    <br>
    <mat-divider></mat-divider>
    <br>
    <!-- Autre contenu -->

    <!-- Contenu du deuxième exemplaire de pagination avec style personnalisé -->
    <app-paginator
      [currentPage]="currentPage2"
      [totalPages]="totalPages2"
      [model]="'model2'"
      (pageChange)="handlePageChange2($event)"
    ></app-paginator>

    <br>
    <mat-divider></mat-divider>
    <br>
    <!-- Autre contenu -->

    <!-- Contenu du troisième exemplaire de pagination avec modèle compact -->
    <app-paginator
      [currentPage]="currentPage3"
      [totalPages]="totalPages3"
      [model]="'model3'"
      (pageChange)="handlePageChange3($event)"
    ></app-paginator>

    <br>
    <mat-divider></mat-divider>
    <br>
    <!-- Autre contenu -->

    <!-- Contenu du quatrième exemplaire de pagination avec modèle numérique -->
    <app-paginator
      [currentPage]="currentPage4"
      [totalPages]="totalPages4"
      [model]="'model4'"
      (pageChange)="handlePageChange4($event)"
    ></app-paginator>

    <br>
    <mat-divider></mat-divider>
    <br>
    <!-- Autre contenu -->

    <!-- Contenu du cinquième exemplaire de pagination avec modèle personnalisé -->
    <app-paginator
      [currentPage]="currentPage5"
      [totalPages]="totalPages5"
      [model]="'model5'"
      (pageChange)="handlePageChange5($event)"
    ></app-paginator>

    <br>
    <mat-divider></mat-divider>
  `,
})
export class PaginationComponent {
  currentPage1 = 1;
  totalPages1 = 50; // Remplacez par le nombre total de pages réel pour le premier exemplaire
  currentPage2 = 1;
  totalPages2 = 20; // Remplacez par le nombre total de pages réel pour le deuxième exemplaire
  currentPage3 = 1;
  totalPages3 = 30; // Remplacez par le nombre total de pages réel pour le troisième exemplaire
  currentPage4 = 1;
  totalPages4 = 15; // Remplacez par le nombre total de pages réel pour le quatrième exemplaire
  currentPage5 = 1;
  totalPages5 = 100; // Remplacez par le nombre total de pages réel pour le cinquième exemplaire

  handlePageChange1(page: number) {
    this.currentPage1 = page;
    // Effectuer d'autres actions pour le premier exemplaire de pagination.
  }

  handlePageChange2(page: number) {
    this.currentPage2 = page;
    // Effectuer d'autres actions pour le deuxième exemplaire de pagination.
  }

  handlePageChange3(page: number) {
    this.currentPage3 = page;
    // Effectuer d'autres actions pour le troisième exemplaire de pagination.
  }

  handlePageChange4(page: number) {
    this.currentPage4 = page;
    // Effectuer d'autres actions pour le quatrième exemplaire de pagination.
  }

  handlePageChange5(page: number) {
    this.currentPage5 = page;
    // Effectuer d'autres actions pour le cinquième exemplaire de pagination.
  }
}

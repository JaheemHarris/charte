import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <!-- Modèle de pagination 1 -->
    <ng-container *ngIf="model === 'model1'">
      <mat-paginator
        [pageIndex]="currentPage - 1"
        [length]="totalPages"
        [pageSize]="pageSize"
        (page)="handlePageChange($event)"
      ></mat-paginator>
    </ng-container>

    <!-- Modèle de pagination 2 -->
    <ng-container *ngIf="model === 'model2'">
      <div class="custom-paginator">
        <span>Page: {{ currentPage }}/{{ totalPages }}</span>
        <button mat-icon-button (click)="previousPage()">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-icon-button (click)="nextPage()">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    </ng-container>

    <!-- Modèle de pagination 3 -->
    <ng-container *ngIf="model === 'model3'">
      <div class="compact-paginator">
        <span>Page {{ currentPage }}/{{ totalPages }}</span>
        <button (click)="goToFirstPage()"><<</button>
        <button (click)="goToPreviousPage()"><</button>
        <button (click)="goToNextPage()">></button>
        <button (click)="goToLastPage()">>></button>
      </div>
    </ng-container>

    <!-- Modèle de pagination 4 -->
    <ng-container *ngIf="model === 'model4'">
      <ul class="numeric-paginator">
        <li *ngFor="let page of getPagesArray()" [class.active]="page === currentPage" (click)="goToPage(page)">
          {{ page }}
        </li>
      </ul>
    </ng-container>

    <!-- Pagination Model 5 -->
    <ng-container *ngIf="model === 'model5'">
      <div class="custom-paginator-5">
        <button (click)="goToFirstPage()">First</button>
        <button (click)="goToPreviousPage()">&lt;&lt;</button>
        <ng-container *ngFor="let page of getCustomPagesArray()">
          <span
            [ngClass]="{'selected-page': currentPage === page}"
            (click)="goToPage(page)"
          >{{ page }}</span>
        </ng-container>
        <button (click)="goToNextPage()">&gt;&gt;</button>
        <button (click)="goToLastPage()">Last</button>
      </div>
    </ng-container>
  `,
  styles: [`
    .custom-paginator {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    
    .custom-paginator span {
      margin-right: 10px;
    }

    .compact-paginator {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
    }
    
    .compact-paginator button {
      padding: 5px;
      margin: 0 3px;
    }

    .numeric-paginator {
      display: flex;
      list-style: none;
      padding: 0;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
    }
    
    .numeric-paginator li {
      margin: 0 3px;
      cursor: pointer;
    }

    .numeric-paginator li.active {
      font-weight: bold;
    }

    .custom-paginator-5 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
      cursor: pointer; /* Add this line */
    }

    .custom-paginator-5 button,
    .custom-paginator-5 span {
      padding: 5px;
      margin: 0 3px;
      cursor: pointer; /* Add this line */
    }

    .custom-paginator-5 span.selected-page {
      background-color: blue; /* Replace with the desired background color */
      color: #ffffff; /* Replace with the desired text color */
      font-weight: bold;
      @apply rounded-md;
      cursor: pointer; /* Add this line */
    }
  `]
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() model: string = '';
  @Output() pageChange = new EventEmitter<number>();

  pageSize = 10;

  handlePageChange(event: any) {
    this.pageChange.emit(event.pageIndex + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  goToFirstPage() {
    this.pageChange.emit(1);
  }

  goToLastPage() {
    this.pageChange.emit(this.totalPages);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
      const pageNumber = parseInt(page.toString(), 10);
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.pageChange.emit(pageNumber);
      }
    }
  }
  

  getPagesArray(): number[] {
    const pagesArray: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  getCustomPagesArray(): (number | string)[] {
    const customPagesArray: (number | string)[] = [];
  
    if (this.totalPages <= 1) {
      customPagesArray.push(1);
    } else if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        customPagesArray.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          customPagesArray.push(i);
        }
        customPagesArray.push('...');
        customPagesArray.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        customPagesArray.push(1);
        customPagesArray.push('...');
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          customPagesArray.push(i);
        }
      } else {
        customPagesArray.push(1);
        customPagesArray.push('...');
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          customPagesArray.push(i);
        }
        customPagesArray.push('...');
        customPagesArray.push(this.totalPages);
      }
    }
  
    return customPagesArray;
  }
  
}

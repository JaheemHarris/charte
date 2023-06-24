import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flat-tag',
  template: `
    <mat-chip *ngIf="type === 'basic'"  [color]="color" [removable]="removable" (removed)="onRemoveTag()">
      {{ label }}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>

    <mat-chip-listbox *ngIf="type === 'chipList-primary'"  >
      <mat-chip-option *ngIf="selected" selected class="primary">{{label}}</mat-chip-option>
      <mat-chip-option *ngIf="!selected" class="primary">{{label}}</mat-chip-option>
    </mat-chip-listbox>

    <mat-chip-listbox *ngIf="type === 'chipList-warn'"  >
      <mat-chip-option *ngIf="selected" selected class="warn">{{label}}</mat-chip-option>
      <mat-chip-option *ngIf="!selected" class="warn">{{label}}</mat-chip-option>
    </mat-chip-listbox>

    <mat-chip-listbox *ngIf="type === 'chipList-perso'"  >
      <mat-chip-option *ngIf="selected" selected class="perso">{{label}}</mat-chip-option>
      <mat-chip-option *ngIf="!selected" class="perso">{{label}}</mat-chip-option>
    </mat-chip-listbox>

    <mat-chip-listbox *ngIf="type === 'chipList-orange'"  >
      <mat-chip-option *ngIf="selected" selected class="orange">{{label}}</mat-chip-option>
      <mat-chip-option *ngIf="!selected" class="orange">{{label}}</mat-chip-option>
    </mat-chip-listbox>

    <mat-chip-listbox *ngIf="type === 'chipList-neutral'"  >
      <mat-chip-option *ngIf="selected" selected class="neutral">{{label}}</mat-chip-option>
      <mat-chip-option *ngIf="!selected" class="neutral">{{label}}</mat-chip-option>
    </mat-chip-listbox>

  `,
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() color: string = 'primary';
  @Input() removable: boolean = false;
  @Input() selected: boolean = false;

  @Output() removeTag: EventEmitter<string> = new EventEmitter<string>();

  onRemoveTag() {
    this.removeTag.emit(this.label);
  }
}

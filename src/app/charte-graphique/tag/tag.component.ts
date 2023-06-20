import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flat-tag',
  template: `
    <mat-chip *ngIf="type === 'basic'"  [color]="color" [removable]="removable" (removed)="onRemoveTag()">
      {{ label }}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>

    <mat-chip-listbox *ngIf="type === 'chipList'"  >
      <ng-content></ng-content>
    </mat-chip-listbox>
  `,
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() color: string = 'primary';
  @Input() removable: boolean = false;

  @Output() removeTag: EventEmitter<string> = new EventEmitter<string>();

  onRemoveTag() {
    this.removeTag.emit(this.label);
  }
}

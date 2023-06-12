import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `
    <mat-chip [color]="color" [removable]="removable" (removed)="onRemoveTag()">
      {{ label }}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>
  `,
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() label: string = '';
  @Input() color: string = 'primary';
  @Input() removable: boolean = false;

  @Output() removeTag: EventEmitter<string> = new EventEmitter<string>();

  onRemoveTag() {
    this.removeTag.emit(this.label);
  }
}

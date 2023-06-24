import { Component, Input } from '@angular/core';

@Component({
  selector: 'flat-font',
  template: `
    <span [style.font-family]="font" [style.font-weight]="weight" [style.font-style]="italic ? 'italic' : 'normal'">
      {{ content }}
    </span>
  `,
})
export class FontComponent {
  @Input() font: string = '';
  @Input() weight: string = '';
  @Input() italic: boolean = false;
  @Input() content: string = '';
}

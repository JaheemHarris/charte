import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  getTooltipText(): string {
    const matIconHtml = '<mat-icon>favorite</mat-icon>';
    const spanHtml = '<span>Ceci est mon tooltip</span>';
    return matIconHtml + spanHtml;
  }  

  ngOnInit() {
  }

}

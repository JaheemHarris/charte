import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() color : string = '';

  constructor() { }

  ngOnInit() {
  }

}

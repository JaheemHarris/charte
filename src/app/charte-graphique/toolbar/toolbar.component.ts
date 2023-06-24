import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() color : string = '';
  @Input() height : string = '';

  constructor() { }

  ngOnInit() {
  }

}

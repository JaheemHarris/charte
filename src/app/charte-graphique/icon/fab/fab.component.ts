import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-icon-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  @Input() type : string = 'primary';

  constructor() { }

  ngOnInit() {
  }

}

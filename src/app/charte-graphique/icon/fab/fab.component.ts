import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-icon-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  @Input() type : string = 'primary';

  constructor() { }

  ngOnInit() {
  }

}

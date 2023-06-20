import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-icon-mini-fab',
  templateUrl: './mini-fab.component.html',
  styleUrls: ['./mini-fab.component.css']
})
export class MiniFabComponent implements OnInit {

  @Input() type : string = 'primary';

  constructor() { }

  ngOnInit() {
  }

}

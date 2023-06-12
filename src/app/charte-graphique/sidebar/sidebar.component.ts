import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

@Input() type : string = ''
@Input() width : string = ''
@Input() height : string = ''

  constructor() { }

  ngOnInit() {
  }

}

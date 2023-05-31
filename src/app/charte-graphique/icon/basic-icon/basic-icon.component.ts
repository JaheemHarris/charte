import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-basic-icon',
  templateUrl: './basic-icon.component.html',
  styleUrls: ['./basic-icon.component.css']
})
export class BasicIconComponent implements OnInit {

  @Input() type : string = 'primary';

  constructor() { }

  ngOnInit() {
  }

}

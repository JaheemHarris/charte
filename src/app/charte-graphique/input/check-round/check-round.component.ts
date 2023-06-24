import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-check-round',
  templateUrl: './check-round.component.html',
  styleUrls: ['./check-round.component.css']
})
export class CheckRoundComponent implements OnInit {

  @Input() type : string = ''
  @Input() label : string = ''

  constructor() { }

  ngOnInit() {
  }

}

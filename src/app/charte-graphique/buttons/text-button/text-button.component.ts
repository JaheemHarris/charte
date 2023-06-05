import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-button-text',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent implements OnInit {

  @Input() type : string = ""
  constructor() { }

  ngOnInit() {
  }

}

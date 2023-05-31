import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent implements OnInit {

  @Input() type: string = 'primary';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit() {
  }

}

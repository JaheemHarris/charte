import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-outline-input',
  templateUrl: './outline-input.component.html',
  styleUrls: ['./outline-input.component.css']
})
export class OutlineInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() type: string = '';

  constructor() { }

  ngOnInit() {
  }

}

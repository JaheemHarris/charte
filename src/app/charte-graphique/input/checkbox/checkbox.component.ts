import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() type : string = ''
  @Input() label : string = ''
  accentColor: string = '#FFFF00';

  constructor() { }

  ngOnInit() {
  }

}

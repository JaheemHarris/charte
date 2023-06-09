import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  toggleOptions: any[] = [
    { value: 'bold', label: 'BoldButton' },
    { value: 'italic', label: 'ItalicButton' },
    { value: 'underline', label: 'UnderlineButton' }
  ];

  DoubletoggleOptions: any[] = [
    { value: 'bold', label: 'BoldTest' },
    { value: 'italic', label: 'ItalicTest' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

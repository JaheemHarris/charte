import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  favoriteFood: any = 123;

  constructor() { }

  haha() {
    console.log('Nouvelle valeur de favoriteFood :', this.favoriteFood);
  }

  ngOnInit() {}

}

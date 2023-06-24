import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  
  tooltipContent = `
    <h1>Bonjour!</h1>
    <p>Voici un exemple de <em>tooltip</em> ou <em>infobules</em>
      Ici on a utilisé du html pour le contenu du tooltip
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  `;
  
  constructor() { }

  ngOnInit() {
  }



}

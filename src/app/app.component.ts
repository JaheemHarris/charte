import { Component, ViewEncapsulation } from '@angular/core';
import { ErrorMessageService } from './messages/error-message/error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charte';

  data = 
  [
    [
      {
        country: "USA",
        visits: 3025,
        error: 100
      },
      {
        country: "China",
        visits: 1882,
        error: 180
      },
      {
        country: "Japan",
        visits: 1809,
        error: 130
      },
      {
        country: "Germany",
        visits: 1322,
        error: 200
      },
      {
        country: "UK",
        visits: 1122,
        error: 150
      },
      {
        country: "France",
        visits: 1114,
        error: 110
      },
      {
        country: "India",
        visits: 984,
        error: 120
      }
    ],[
      {
        country: "Russia",
        visits: 2456,
        error: 320
      },
      {
        country: "Korea",
        visits: 320,
        error: 10
      },
      {
        country: "Spain",
        visits: 540,
        error: 39
      },
      {
        country: "Madagascar",
        visits: 234,
        error: 12
      }
    ]
  ];

  constructor() {}
}

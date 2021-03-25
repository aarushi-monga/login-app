import { Component } from '@angular/core';

import { ServicesService } from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApplication';
  public todaydate: Date | undefined;
  constructor(private services: ServicesService) {}
   ngOnInit() {
      this.todaydate = this.services.showTodayDate();
   }
}

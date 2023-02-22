import { Component } from '@angular/core';
import { City } from './models/city.model';
import { arrayOfCities } from './assets/fakeCities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'econt-miniapp-angular';
  cities: City[] = arrayOfCities;
}

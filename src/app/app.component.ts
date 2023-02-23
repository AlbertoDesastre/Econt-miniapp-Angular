import { Component, Input } from '@angular/core';
import { City } from './models/city.model';
import { arrayOfCities } from './assets/fakeCities';
import { saveItems } from './helpers/saveItems';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'econt-miniapp-angular';

  @Input() user = {
    id: 0,
    name: '',
    region: '',
    city: '',
    cityId: 0,
    active: false,
  };

  ngOnInit() {
    console.log('user on storage before: ', localStorage.getItem('user'));
    console.log('user on class before:', this.user);
    if (localStorage.getItem('user') === null) {
      this.setUser({
        id: 5,
        name: 'Carlos',
        region: 'Silistra',
        city: 'Aydemir',
        cityId: 80,
        active: false,
      });
    }

    console.log('user on storage: ', localStorage.getItem('user'));
    console.log('user on class:', this.user);
  }

  setUser(userJson: {
    id: number;
    name: string;
    region: string;
    city: string;
    cityId: number;
    active: boolean;
  }) {
    const userOnLocalStorage = localStorage.getItem('user');

    if (userOnLocalStorage) {
      this.user = JSON.parse(userOnLocalStorage);
    } else {
      this.user = userJson;
      saveItems('user', userJson);
    }
  }
}

import { Component, Input, Output } from '@angular/core';
import { City } from './models/city.model';
import { arrayOfCities } from './assets/fakeCities';
import { saveItems, saveItemsForced } from './helpers/saveItems';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'econt-miniapp-angular';

  @Output() user: User = {
    id: 5,
    name: 'Carlos',
    region: 'Silistra',
    regionNameEn: 'Aydemir',
    cityId: 2,
    active: false,
  };

  ngOnInit() {
    /*    console.log('user on storage before: ', localStorage.getItem('user'));
    console.log('user on class before:', this.user); 
         WILL HAVE TO UNCOMMENT
    if (localStorage.getItem('user') === null) {
      this.setUser(this.user);
    }
    */

    this.setUser(this.user);

    /*  console.log('user on storage: ', localStorage.getItem('user'));
    console.log('user on class:', this.user); */
  }

  setUser(userJson: {
    id: number;
    name: string;
    region: string;
    regionNameEn: string;
    cityId: number;
    active: boolean;
  }) {
    /*  
   This will have to be uncommented on Prod
   const userOnLocalStorage = localStorage.getItem('user');

    if (userOnLocalStorage) {
      this.user = JSON.parse(userOnLocalStorage);
    } else {
      this.user = userJson;
      saveItems('user', userJson);
    }
 */

    /*User is overwrittten in case an user already exists on LocalStorage. Only for testing purposes */
    saveItemsForced('user', userJson);
  }
}

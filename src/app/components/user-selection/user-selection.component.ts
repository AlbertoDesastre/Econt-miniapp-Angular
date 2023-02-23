import { Component, OnInit } from '@angular/core';
import { saveItems } from 'src/app/helpers/saveItems';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss'],
})
export class UserSelectionComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Dimitri',
      region: 'Plovdiv',
      city: 'Asenovgrad',
      cityId: 3,
      active: false,
    },
    {
      id: 2,
      name: 'Alberto',
      region: 'Burgas',
      city: 'Pomorie',
      cityId: 67,
      active: false,
    },
    {
      id: 3,
      name: 'Ana',
      region: 'Sofia',
      city: 'Kostenets',
      cityId: 21,
      active: false,
    },
    {
      id: 4,
      name: 'Dri',
      region: 'Veliko Tyrnovo',
      city: 'Svishtov',
      cityId: 73,
      active: false,
    },
    {
      id: 5,
      name: 'Carlos',
      region: 'Silistra',
      city: 'Aydemir',
      cityId: 80,
      active: true,
    },
    {
      id: 6,
      name: 'Olena',
      region: 'Blagoevgrad',
      city: 'Bansko',
      cityId: 88,
      active: false,
    },
  ];
  activeUser = false;
  user = {
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

  toggleUser() {
    console.log(this.activeUser);
    this.activeUser = !this.activeUser;
  }
}

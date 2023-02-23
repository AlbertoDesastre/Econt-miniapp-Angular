import { Component } from '@angular/core';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss'],
})
export class UserSelectionComponent {
  users = [
    {
      id: 1,
      name: 'Dimitri',
      region: 'Plovdiv',
      city: 'Asenovgrad',
      cityId: 3,
      active: true,
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
      active: false,
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

  toggleUser() {
    console.log(this.activeUser);
    this.activeUser = !this.activeUser;
  }
}

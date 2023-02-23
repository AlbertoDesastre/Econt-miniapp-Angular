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
    },
    { id: 2, name: 'Alberto', region: 'Burgas', city: 'Pomorie', cityId: 67 },
    { id: 3, name: 'Ana', region: 'Sofia', city: 'Kostenets', cityId: 21 },
    {
      id: 4,
      name: 'Dri',
      region: 'Veliko Tyrnovo',
      city: 'Svishtov',
      cityId: 73,
    },
    { id: 5, name: 'Carlos', region: 'Silistra', city: 'Aydemir', cityId: 80 },
    { id: 6, name: 'Olena', region: 'Blagoevgrad', city: 'Bansko', cityId: 88 },
  ];

  activeUser = false;

  toggleUser() {
    console.log(this.activeUser);
    this.activeUser = !this.activeUser;
  }
}

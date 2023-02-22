import { Component } from '@angular/core';
import { City } from '../../models/city.model';
import { arrayOfCities } from '../../assets/fakeCities';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  cities: City[] = arrayOfCities;
  showDropdown = false;

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };
}

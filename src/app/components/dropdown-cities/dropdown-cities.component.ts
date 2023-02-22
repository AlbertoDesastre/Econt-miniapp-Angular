import { Component } from '@angular/core';
import { City } from '../../models/city.model';
import { arrayOfCities } from '../../assets/fakeCities';

@Component({
  selector: 'app-dropdown-cities',
  templateUrl: './dropdown-cities.component.html',
  styleUrls: ['./dropdown-cities.component.scss'],
})
export class DropdownCitiesComponent {
  cities: City[] = arrayOfCities;
  showDropdown = false;

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };
}

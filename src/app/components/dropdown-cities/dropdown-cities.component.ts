import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-dropdown-cities',
  templateUrl: './dropdown-cities.component.html',
  styleUrls: ['./dropdown-cities.component.scss'],
})
export class DropdownCitiesComponent implements OnInit {
  cities: City[] = [
    {
      id: 8,
      country: {
        id: null,
        code2: 'BG',
        code3: 'BGR',
        name: 'България',
        nameEn: 'Bulgaria',
        isEU: true,
      },
      postCode: '5000',
      name: 'Велико Търново',
      nameEn: 'Veliko Tyrnovo',
      regionName: 'Велико Търново',
      regionNameEn: 'Veliko Tyrnovo',
      phoneCode: '62',
      location: null,
      expressCityDeliveries: true,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
    },
  ];

  data: any;
  constructor(private citiesService: CitiesService) {}
  showDropdown = false;

  ngOnInit(): void {
    this.citiesService
      .getCitiesFrom({ countryCode: 'BGR' })
      .subscribe((response) => {
        const { cities } = response;
        this.cities = cities;
        console.log('finishing the api call', cities);
      });
  }

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };
}

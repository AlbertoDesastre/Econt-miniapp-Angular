import { Component, Input, OnInit } from '@angular/core';
import { City, TinyCity } from '../../models/city.model';
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

  tinyCities: TinyCity[] = [{ id: 0, nameEn: '' }];

  data: any;
  constructor(private citiesService: CitiesService) {}
  showDropdown = false;

  ngOnInit(): void {
    this.citiesService
      .getCitiesFrom({ countryCode: 'BGR' })
      .subscribe((response) => {
        const { cities } = response;
        this.cities = cities;
        /*     console.log('finishing the api call', cities); */
        this.setTinyCities();
      });
  }

  setTinyCities() {
    this.tinyCities = this.citiesService.getCitiesId(this.cities);
    console.log(this.tinyCities);
  }

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };
}

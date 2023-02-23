import { Component, Input, OnInit } from '@angular/core';
import { City, exampleCity, TinyCity } from '../../models/city.model';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { OfficesService } from 'src/app/services/offices/offices.service';
import { exampleOffice, Office } from 'src/app/models/office.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  cities: City[] = [exampleCity];
  offices: Office[] = [exampleOffice];
  tinyCities: TinyCity[] = [{ id: 0, nameEn: '' }];
  showDropdown = false;

  constructor(
    private citiesService: CitiesService,
    private officeService: OfficesService
  ) {}

  ngOnInit(): void {
    this.citiesService
      .getCitiesFrom({ countryCode: 'BGR' })
      .subscribe((response) => {
        const { cities } = response;
        this.cities = cities;
        /*Si no es capaz de obtener tinyCities, solo ahí rellenará el atributo tinyCities de esta Clase. 
        Luego, las creará en el localStorage.*/
        if (!this.getTinyCities()) {
          this.setTinyCities();
        }
        this.setTinyCitiesOnLocalStorage();
      });

    this.officeService
      .getFrom({ countryCode: 'BGR', cityID: 2 })
      .subscribe((response) => {
        const { offices } = response;
        this.offices = offices;
        console.log(offices);
      });
  }
  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };

  getTinyCities() {
    /*     console.log(this.citiesService.getTinyCitiesFromLocalStorage()); */
    return this.citiesService.getTinyCitiesFromLocalStorage();
  }

  setTinyCities() {
    this.tinyCities = this.citiesService.getCitiesNamesAndIds(this.cities);
    /* console.log(this.tinyCities); */
  }

  setTinyCitiesOnLocalStorage() {
    this.citiesService.setTinyCitiesOnLocalStorage(this.tinyCities);
  }
}

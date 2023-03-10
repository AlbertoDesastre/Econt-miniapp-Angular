import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { City, exampleCity, TinyCity } from '../../models/city.model';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { OfficesService } from 'src/app/services/offices/offices.service';
import { exampleOffice, Office } from 'src/app/models/office.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnChanges {
  /* All states initialized empty or with templates */
  cities: City[] = [exampleCity];
  offices: Office[] = [exampleOffice];
  tinyCities: TinyCity[] = [{ id: 0, nameEn: '' }];
  showDropdown = false;

  @Input() user: User = {
    id: 0,
    name: '',
    region: '',
    regionNameEn: '',
    cityId: 0,
    active: false,
  };

  constructor(
    private citiesService: CitiesService,
    private officeService: OfficesService
  ) {}

  ngOnInit(): void {
    /*  console.log('LOG on Init del dropdown', this.user); */

    this.citiesService
      .getCitiesFrom({ countryCode: 'BGR' })
      .subscribe((response) => {
        const { cities } = response;
        this.cities = cities;
        /*Si no es capaz de obtener tinyCities, solo ahí rellenará el atributo tinyCities de esta Clase. 
        Luego, las creará en el localStorage.*/
        if (!this.getTinyCities()) {
          this.setTinyCitiesOnClass();
        }
        this.setTinyCitiesOnLocalStorage();
      });

    this.officeService
      .getFrom({ countryCode: 'BGR', cityID: this.user.cityId })
      .subscribe((response) => {
        const { offices } = response;
        this.normalizeOpenHours(offices);
        this.offices = offices;
        console.log(offices);
      });

    /* console.log('Log al terminar el Init', this.user); */
  }

  ngOnChanges(changes: SimpleChanges) {
    /* console.log('my user on change', changes); */
  }

  toggleDropdown = () => {
    this.showDropdown = !this.showDropdown;
  };

  /* PENDING! to refactor on offices services */
  normalizeOpenHours(offices: Office[]) {
    offices.map((office) => {
      office.normalBusinessHoursFrom = new Date(
        office.normalBusinessHoursFrom
      ).toLocaleTimeString();
      office.normalBusinessHoursTo = new Date(
        office.normalBusinessHoursTo
      ).toLocaleTimeString();
    });
  }

  getTinyCities() {
    return this.citiesService.getTinyCitiesFromLocalStorage();
  }

  setTinyCitiesOnClass() {
    this.tinyCities = this.citiesService.getCitiesNamesAndIds(this.cities);
    /* console.log(this.tinyCities); */
  }

  setTinyCitiesOnLocalStorage() {
    this.citiesService.setTinyCitiesOnLocalStorage(this.tinyCities);
  }
}

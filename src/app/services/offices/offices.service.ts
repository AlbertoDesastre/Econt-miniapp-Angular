import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Office } from '../../models/office.model';
@Injectable({
  providedIn: 'root',
})
export class OfficesService {
  private url =
    'http://demo.econt.com/ee/services/Nomenclatures/NomenclaturesService.GetOffices.json';
  constructor(private http: HttpClient) {}

  getFrom(cityId: number) {
    return this.http.post<Office[]>(this.url, { countryCode: 'BGR', cityId });
  }
}

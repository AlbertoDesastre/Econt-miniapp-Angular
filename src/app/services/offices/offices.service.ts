import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from '../../models/office.model';
@Injectable({
  providedIn: 'root',
})
export class OfficesService {
  private url =
    'http://demo.econt.com/ee/services/Nomenclatures/NomenclaturesService.GetOffices.json';

  constructor(private http: HttpClient) {}

  getFrom(body: {
    countryCode: 'BGR';
    cityID: number;
  }): Observable<{ offices: Office[] }> {
    /* console.log(body); */
    return this.http.post<{ offices: Office[] }>(this.url, body);
  }
}

/* getCitiesFrom(body: { countryCode: string }): Observable<{ cities: City[] }> {
  return this.http.post<{ cities: City[] }>(this.url, body);
} */

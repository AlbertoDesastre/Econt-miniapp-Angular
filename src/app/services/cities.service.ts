import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private url =
    'http://demo.econt.com/ee/services/Nomenclatures/NomenclaturesService.getCities.json';
  constructor(private http: HttpClient) {}

  getCitiesFrom(body: { countryCode: string }): Observable<{ cities: City[] }> {
    return this.http.post<{ cities: City[] }>(this.url, body);
  }
}

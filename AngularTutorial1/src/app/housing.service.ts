import { Injectable } from '@angular/core';
import {HousingLocation} from './housing-location'

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    return (await data.json().then(json => json[0])) ?? {};
  }

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';

  housingLocationList : HousingLocation[] = [];

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}

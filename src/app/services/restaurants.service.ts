import { Injectable } from '@angular/core';
import {Restaurant} from '../models/restaurant';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  // region Attributes
  restaurants: Restaurant[];
  // endregion

  constructor() {
    this.restaurants = [
      new Restaurant({
        name: 'Tav Cafe',
        phone: '(514) 112-3581',
        rating: 3,
        priceRange: 3,
        website: 'http://cafetav.com/'
      }),
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 234-1111',
        rating: 4,
        priceRange: 4
      }),
      new Restaurant({
        name: 'Home',
        rating: 5,
        priceRange: 1,
        website: 'http://google.com/'
      })
    ];
  }

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
}

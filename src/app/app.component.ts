import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';
import {RestaurantsService} from './services/restaurants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rests: Restaurant[];

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(rest => this.rests = rest);
  }

}

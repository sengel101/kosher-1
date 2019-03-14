// region Imports
import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;
  // endregion
  // region Methods
  constructor(a?) {
    this.name = a.name;
    this.website = a.website;
    this.phone = a.phone;
    this.rating = a.rating;
    this.priceRange = a.priceRange;
  }
  // endregion
}

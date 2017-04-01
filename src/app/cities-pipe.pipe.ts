import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citiesPipe'
})
export class CitiesPipePipe implements PipeTransform {
   	/*
		I used pipe to allow the user to choose offer by city 
   	*/

  transform(Offers: any, city?: any ): any {
	if ( city === undefined ||  city === 'ALL') return Offers;
		return Offers.filter(function(offer){
			return  offer.destination.city.includes(city);
		})   
  }
}

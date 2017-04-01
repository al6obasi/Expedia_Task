import { Component  } from '@angular/core';
import { HotelDataService} from './hotel-data.service';
import {Observable} from 'rxjs/Rx';
import { CitiesPipePipe} from './cities-pipe.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })

export class AppComponent  {
  	Offers : any;
  	/*
		cities  for pipe 
  	*/
  	cities = ['ALL'];
    constructor( private hotels : HotelDataService ) { 
    		this.hotels.getData().subscribe( result => {
      			this.Offers = result ;
      			// console.log(this.Offers)
      				/*
      				loop to get all cities without repetion for pipe uses .
      				*/
      			this.Offers.forEach( value =>  {
  					// console.log(value);
  					if ( this.cities.indexOf(value.destination.city) === -1 ) {
  						this.cities.push(value.destination.city)
  					}
				});
  				//	console.log(this.cities ); 
    		})

 	 }
}

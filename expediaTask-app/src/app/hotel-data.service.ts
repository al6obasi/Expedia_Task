import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HotelDataService {

  constructor( private http:Http ) {
   }
   	/*
		function to send get request from routes file and the will handel this request .
   	*/
   getData(){
        return this.http.get('/api/hotelData').map( res => res.json() );
   }

}

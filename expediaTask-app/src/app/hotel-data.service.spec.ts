/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotelDataService } from './hotel-data.service';

describe('HotelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelDataService]
    });
  });

  it('should ...', inject([HotelDataService], (service: HotelDataService) => {
    expect(service).toBeTruthy();
  }));
});

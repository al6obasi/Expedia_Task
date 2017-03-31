import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HotelDataService} from './hotel-data.service';
import { AppComponent } from './app.component';
import { CitiesPipePipe } from './cities-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitiesPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HotelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

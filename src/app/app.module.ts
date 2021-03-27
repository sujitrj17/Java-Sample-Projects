import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TravellerComponent } from './traveller/traveller.component';
import { TravellerSeviceService } from './traveller-sevice.service';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    TravellerComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TravellerSeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

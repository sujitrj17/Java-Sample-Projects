import { Component, OnInit } from '@angular/core';
import { TravellerSeviceService } from '../traveller-sevice.service';
import { Example } from './Example .model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private serve:TravellerSeviceService) { }

  ngOnInit() {
  }

  countryName:string ;
  ex = new Example;

  search(){
    console.log(this.ex);
    console.log("country name ="+this.countryName);
    this.serve.getCountryData(this.countryName).subscribe(data=>{this.ex=data});
  }
}

import { Injectable } from '@angular/core';
import { Traveller } from './traveller/Traveller.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Example } from './countries/Example .model';

@Injectable({
  providedIn: 'root'
})
export class TravellerSeviceService {
   url:string = 'http://localhost:8085/traveller/';
   cntryUrl:string ='https://restcountries-v1.p.rapidapi.com/name/'

    // headers = new HttpHeaders();
   
  constructor(private http:HttpClient) { 
  }

  addTraveller(tr){
    console.log("addeddd");
   return this.http.post<string>(this.url,tr);
    
  }

  showAll(){
    return this.http.get<Traveller[]>(this.url)
  }

  login(u:string,p:string){
    console.log(u,p);
    return this.http.get<Traveller[]>(this.url+u+"/"+p);
  }

  update(tr:Traveller){
    return this.http.put<Number>(this.url,tr);
  }

  delete(ids:number){
return this.http.delete<Traveller[]>(this.url+ids);
  }

  getCountryData(c:string){
    console.log("contry name in service ="+c);
    
    let header = new HttpHeaders().append('X-RapidAPI-Key','66ca0fca55mshf15864390cb2a2dp10baa6jsn3a1a8bbcad43');
    return this.http.get<Example>(this.cntryUrl+c,{headers:header});
  }
}

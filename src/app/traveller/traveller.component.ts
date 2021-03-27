import { Component, OnInit } from '@angular/core';
import { Traveller } from './Traveller.model';
import { TravellerSeviceService } from '../traveller-sevice.service';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  constructor(private serv: TravellerSeviceService) {

  }

  ngOnInit() {
  }


  // declarations
  tr = new Traveller();
  registerPageDisplay: boolean = false;
  loginPage: boolean = false;
  tableDisplay: boolean = false;
  editFormDisplay: boolean = false;
  successMessage: boolean = false;
  TrArray: Traveller[]=[];
  editArray: Traveller[];
  nm: string;
  addedUserName: string;
  singleTraveller: Traveller;
  uname:string;
  pass:string;
  incorrectLogin:string="";

  //functions
  addTraveller(tr) {
    console.log(tr);
    this.serv.addTraveller(tr).subscribe(f => { this.nm = f });
    this.successMessage = true;
    this.loginPage = false;
    this.editFormDisplay = false;
  }

  registerPage() {
    this.registerPageDisplay = true;
    this.loginPage = false;
  }

  showAll() {
    this.tableDisplay = true;
    this.loginPage = false;
    this.registerPageDisplay = false;
    return this.serv.showAll().subscribe(r => { this.TrArray = r });
  }

  login() {
    this.incorrectLogin="";
    this.serv.login(this.uname, this.pass).subscribe(g => { this.TrArray = g });
    // this.serv.login(tr.username, tr.password);
    console.log("length="+this.TrArray.length);
    if(this.TrArray.length===0){
      console.log("*****incorrect login*****");
      this.incorrectLogin="Username or Password is incorrect";
      this.tableDisplay = false;
    this.loginPage = true;
    this.registerPageDisplay = false;
    }
    else{
      this.incorrectLogin="";
    this.tableDisplay = true;
    this.loginPage = false;
    this.registerPageDisplay = false;
    this.TrArray=[];
    }
  }

  showHomePage() {
    this.tableDisplay = false;
    this.loginPage = true;
    this.registerPageDisplay = false;
  }

  onlyLoginPage() {
    this.registerPageDisplay = false;
    this.loginPage = true;
    this.tableDisplay = false;
    this.editFormDisplay = false;
    this.successMessage = false;

  }
  onlyRegisterPage() {
    this.registerPageDisplay = true;
    this.loginPage = false;
    this.tableDisplay = false;
    this.editFormDisplay = false;
    this.successMessage = false;
  }

  onlyEditPage(i) {
    this.registerPageDisplay = false;
    this.loginPage = false;
    this.tableDisplay = false;
    this.editFormDisplay = true;
    this.successMessage = false;
    this.editArray = i;
  }

  update(tr: Traveller) {
    this.registerPageDisplay = false;
    this.loginPage = false;
    this.tableDisplay = true;
    this.editFormDisplay = false;
    this.successMessage = false;
    console.log(tr);

    // this.showAll
    return this.serv.addTraveller(tr).subscribe(a => { this.nm = a });
  }

  delete(ids: number) {
    console.log(ids);
    this.serv.delete(ids).subscribe(k => { this.TrArray = k });
    this.tableDisplay = true;
    this.loginPage = false;
    this.registerPageDisplay = false;
  }

  pageTransition(pg:number){

    switch(pg){
      case 1:
        this.onlyLoginPage();
      break;
      case 2:
        this.onlyRegisterPage();
      break;
      case 3:
        this.showHomePage();
      break;
      case 4:
      break;
    }
  }
}

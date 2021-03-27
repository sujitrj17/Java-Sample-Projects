import { Component } from '@angular/core';
import {Traveller} from './traveller/Traveller.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWebServiceCrud';

  onSubmit(){

  }

  register:any = {};
}

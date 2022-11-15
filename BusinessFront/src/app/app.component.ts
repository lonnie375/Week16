import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessFront';

  constructor(public http: HttpClient, public depSrv: DepartmentService) {}

  finishedWithCall(obj: any) {
    console.log(obj);
  }

  //Get is a function and it takes subscribe which is a function, we are passing in the finishedWithCall inside of it. 
  // This is an example of a call back function 
  // Short version we need to give the HTTP client instance the url and an action method. 
  callApi() {
    this.http.get<any>('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(this.finishedWithCall);
  }

  getDepartments() {
    this.depSrv.getAll(
      (result: Department[]) => {
        // Here is where we receive the department data. 
        console.log(result);
      }
    )
  }
}

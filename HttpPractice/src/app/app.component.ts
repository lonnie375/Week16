import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpPractice';

// Let's ask Angular to supply the HttpClient
  constructor(private http: HttpClient){}

  httpDemo() {
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'; 
    this.http.get(url).subscribe(
      (result: any) => {
        console.log(result);
      }
    );
  }
  }


//This is just an example. We normally inject the HttpClient so that it is stored once. 
// Every component that needs will inject it from the service. 
// This prevents us from overloading the system. 


// You have to look in the console to see the results because it is just gathering the information from the API

  // httpDemo() {
  //   let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count='; 
  //   let http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

  //   http.get(url).subscribe(
  //     (result: any) => {
  //       console.log(result);
  //     }
  //   ); 
  // }





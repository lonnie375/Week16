import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeckofcardsService } from './deckofcards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpPractice';

// Let's ask Angular to supply the HttpClient
  constructor(private http: HttpClient, private docSrv: DeckofcardsService){}

  httpDemo() {
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'; 
    this.http.get(url).subscribe(
      (result: any) => {
        console.log(result);
      }
    );
  }

  


//The call back function goes inside of getDeck. 
//This is how we will do it in the future. 
// We will receive through dependency injection a service. 
// We'll call a function in the service, and pass in a callback function. 
// The service will do the API call, and call our callback 
// so we can receive the data 
  test2() {
    this.docSrv.getDeck(
      (result: any) => {
        console.log('Back in App Component'); 
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





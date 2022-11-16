import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckofcardsService {

  constructor(private http: HttpClient) { }


  


  // Write a function to get a deck of cards 
  // getDeck receives the call back function. 
  getDeck(cb: any) {
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'; 
    //using the callback function through subscribe.
    this.http.get(url).subscribe(cb); 
  }
}

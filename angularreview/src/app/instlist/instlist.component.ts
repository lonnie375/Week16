import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-instlist',
  templateUrl: './instlist.component.html',
  styleUrls: ['./instlist.component.css']
})
export class InstlistComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  addInstrument(){
    alert('I am here');
  }

}

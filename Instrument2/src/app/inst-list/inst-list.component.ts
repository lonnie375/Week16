import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrls: ['./inst-list.component.css']
})
export class InstListComponent implements OnInit {

  //removing "public InstSrv" Just putting InstSrv
  // Still gets injected but it doesn't become a member variable
  // We set it to a variable that is an array of Instrument. 
  // We are taking it into the constructor. 
  TheLists: Instrument[];
  constructor(InstSrv: InstrumentService) { 
    this.TheLists = InstSrv.get(); 
  }

  ngOnInit(): void {
  }

}

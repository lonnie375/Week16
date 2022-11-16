import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  //Add input, output, and eventemitter imports 
  
  @Input() employee: Employee = {
    id: 0, firstname: '', lastname: '', phone: '', email: '', department: '', hiredate: new Date()
  }

  @Output() delete: EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe2(){
    this.delete.emit(this.employee.id); 
  }

}

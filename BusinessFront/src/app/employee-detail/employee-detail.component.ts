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
  @Output() update: EventEmitter<Employee> = new EventEmitter<Employee>(); 

  editMode: boolean = false; 
  editFirstName: string = '';
  editLastName: string = ''; 
  editphone: string = '';
  editemail: string = ''; 
  editdepartment: string = ''; 
  editHireDate: Date = new Date(); 
  constructor() { }

  ngOnInit(): void {
  }

  deleteMe2(){
    this.delete.emit(this.employee.id); 
  }

  editMe(){

  }

  turnOnEditMode(){
    this.editMode = true; 
    this.editFirstName = this.employee.firstname; 
    this.editLastName = this.employee.lastname; 
    this.editphone = this.employee.phone; 
    this.editemail = this.employee.email; 
    this.editdepartment = this.employee.department; 
    this.editHireDate = this.employee.hiredate; 
  }

  saveChanges(){
    let updatedEmp: Employee = {
      id: this.employee.id, 
      firstname: this.editFirstName, 
      lastname: this.editLastName,
      phone: this.editphone, 
      email: this.editemail, 
      department: this.editdepartment, 
      hiredate: this.editHireDate
    }
    this.update.emit(updatedEmp);
  }

  cancel(){
    this.editMode = false; 
  }
}

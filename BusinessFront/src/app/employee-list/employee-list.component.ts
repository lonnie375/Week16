import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  TheList: Employee[] = []; 

  // Variables for entering a new Employee
  newFirstName: string = '';
  newLastName: string = ''; 
  newphone: string = '';
  newemail: string = ''; 
  newdepartment: string = ''; 
  newHireDate: Date = new Date(); 

  constructor(private empSrv: EmployeeService) { }

  ngOnInit(): void {
    //Put the refresh here so that it can be done when the program loans
    this.refresh(); 
  }

  refresh() {
    this.empSrv.getAll(
      //this function will receive the data
      //It comes in as an array of employees
      (result: Employee[]) => {
        //we are saving the information from our service to "theList"
        this.TheList = result; 
      }
    );
    this.newFirstName = '', 
    this.newLastName = '', 
    this.newphone = '', 
    this.newemail = '', 
    this.newdepartment = '', 
    this.newHireDate = new Date(); 
  }

  deleteOne(id: number){
    this.empSrv.delete(
      (result: ApiResponse) => {
        console.log(result);
        this.refresh(); 
      },
      id
      )
  }

  saveNew(){
    let newPeep: Employee = {
      id: 0, 
      firstname: this.newFirstName,
      lastname: this.newLastName, 
      phone: this.newphone, 
      email: this.newemail, 
      department: this.newdepartment, 
      hiredate: this.newHireDate
    };

    this.empSrv.add(
      (result:  Employee) => {
        this.refresh(); 
      }, 
      newPeep
    )
  }

  updateOne(updatedEmp: Employee){
    this.empSrv.update(
      (result: ApiResponse) => {
        this.refresh(); 
      }, 
      updatedEmp
    )
  }

}

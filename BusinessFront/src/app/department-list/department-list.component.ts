import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  TheList: Department[] = []; 

  constructor(public DepSrv: DepartmentService) { }

  ngOnInit(): void {
    this.refresh();
  }
  
  refresh() {
    this.DepSrv.getAll(
      (result: any) => {
          // Inside here is where we put our code for doing something
          // With the list that we got back
          console.log("All Departments")
          console.log(result)
          this.TheList = result; 
      }
    ); 
  }

  doDeleteOne(id: string){

      // After we delete, we have to refresh the list. 
    this.DepSrv.delete(
      (result: any) => {
        console.log(result); 
        this.refresh();
      },
      //second parameter for delete: the id we want to delete
      id 
    )
    }
}

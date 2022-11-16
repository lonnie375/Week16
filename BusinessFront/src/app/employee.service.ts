import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	getAll(cb: any) {
		// https://localhost:7147/department
		this.http.get<Employee[]>('https://localhost:7210/employee').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Employee>(`https://localhost:7210/employee/${id}`).subscribe(cb);
	}

	add(cb: any, emp: Employee) {
		this.http.post<Employee>('https://localhost:7210/employee', emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.delete<ApiResponse>(`https://localhost:7210/employee?id=${id}`).subscribe(cb);
	}

	update(cb: any, emp: Employee) {
		this.http.put<ApiResponse>('https://localhost:7210/employee', emp).subscribe(cb);
	}

  constructor(private http: HttpClient) { }
}

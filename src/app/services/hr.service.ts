import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  private readonly API_URL = "http://localhost:8080/hrms/";
 
  constructor(private http: HttpClient) {}
 
  /* ---- Get Companies ------*/ 
  getCompanies(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'companies');
  }

   /* ---- Get Departments ------*/ 
  getDepartments(): Observable<any>{
    return this.http.get<any>(this.API_URL + 'departments');
  }

   /* ---- Get Employees ------*/ 
   getEmployees(): Observable<any>{
    return this.http.get<any>(this.API_URL + 'employees');
   }

   /* ---- Get Employee by ID ------*/ 
   getEmployeeById(id: string): Observable<any>{
    return this.http.get<any>(this.API_URL + `employees/${id}`);
   }

   /*----- Add New Employee ------*/
   postNewEmployee(body: any): Observable<any> {
    console.log(body);        
    return this.http.post<any>(this.API_URL + 'employees', body);
  }


  /*------ Delete Employee -----*/
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(this.API_URL + `employee/${id}`);
  }

  /*------ Update Employee -----*/
  putEmployee(body: any, id: string): Observable<any>{
    console.log(body);
    return this.http.put<any>(this.API_URL + `employees/${id}`, body);
  }


}

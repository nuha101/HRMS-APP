import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CopmanyListComponent } from './components/copmany-list/copmany-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company-list', component: CopmanyListComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee/:id', component:  EmployeeComponent },
  { path: 'new-employee', component: NewEmployeeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

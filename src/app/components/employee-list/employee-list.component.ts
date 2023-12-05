import { Component, Input, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  @Input()
  id: string;

  firstName: string = '';
  lastName: string = '';
  salary: number = 0;
  isAdmin: boolean = false;
  companyId: number = 0;
  departmentId: number = 0;

  editingEmployee: any | null = null;

  constructor(private hrService: HrService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  /*----- get all employees ---*/

  getEmployees(): void {
    this.hrService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.employees = data;
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      },
    });
  }

  /*----- toggle employee ---*/

  toggleEdit(employee: any) {
    employee.editing = !employee.editing;

    if (employee.editing) {
      this.editingEmployee = employee;
    } else {
      this.editingEmployee = null;
    }
  }

  /*----- update employee ---*/

  editEmployee(employee: any): void {
    const updateEmployee = {
      id: employee.id,
      department: {
        id: employee.departmentId,
      },
      company: {
        id: employee.companyId,
      },
      employeeInfo: {
        firstName: employee.employeeInfo.firstName,
        lastName: employee.employeeInfo.lastName,
        salary: employee.employeeInfo.salary,
        isAdmin: employee.employeeInfo.isAdmin,
      },
    };

    this.hrService.putEmployee(updateEmployee, employee.id).subscribe(
      (response) => {
        console.log('Employee updated successfully:', response);
        employee.editing = null;
        alert('Employee updated successfully: ' + JSON.stringify(response));
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }

  /*----- delete employee ---*/

  removeEmployee(deleteId: string): void {
    console.log(deleteId);

    this.hrService.deleteEmployee(deleteId).subscribe({
      next: (data) => {
        alert('employee deleted successfully');
        this.getEmployees();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}

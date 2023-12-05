import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  salary: number = 0;
  isAdmin: boolean = false;
  companyId: number = 0;
  departmentId: number = 0;
  message: string | null = null;

  constructor(private hrService: HrService) {}

  ngOnInit(): void {}

  isDisabled(): boolean {
    return (
      !this.firstName ||
      !this.lastName ||
      !this.salary ||
      !this.isAdmin ||
      !this.companyId ||
      !this.departmentId
    );
  }

  addEmployee() {
    const empData = {
      department: {
        id: this.departmentId,
      },
      company: {
        id: this.companyId,
      },
      employeeInfo: {
        firstName: this.firstName,
        lastName: this.lastName,
        salary: this.salary,
        isAdmin: this.isAdmin,
      },
    };

    this.hrService.postNewEmployee(empData).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        this.message = 'Employee created successfully!';
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
    
    this.clearForm();
  }

  clearForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.salary = 0;
    this.isAdmin = false;
    this.companyId = 0;
    this.departmentId = 0;
  }
}

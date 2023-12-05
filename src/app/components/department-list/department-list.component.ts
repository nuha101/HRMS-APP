import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: any[] = [];

  constructor(private hrService: HrService){}
  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void{
    this.hrService.getDepartments().subscribe({
      next:(data) => {
        console.log(data);
        this.departments = data;
      },
      error: (errorMessage)=>{

        console.log(errorMessage);
        
      }
    });
  }

}

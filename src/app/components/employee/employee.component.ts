import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrService } from 'src/app/services/hr.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: any;

  @Input()
  id: string;

  constructor(private hrService: HrService, private activateRoute: ActivatedRoute){
    this.id = '';
    
  }

  ngOnInit(): void {
    const empId = this.activateRoute.snapshot.params["id"];
    this.id = empId;
    console.log(this.id);
    if (this.id) {
      this.getEmployeeById();
    } 
   
  }

  getEmployeeById(){
    this.hrService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.employee = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}

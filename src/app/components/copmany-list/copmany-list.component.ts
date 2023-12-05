import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';


@Component({
  selector: 'app-copmany-list',
  templateUrl: './copmany-list.component.html',
  styleUrls: ['./copmany-list.component.css'],
})
export class CopmanyListComponent implements OnInit{
  companies: any[] = [];

  constructor(private hrService: HrService) {}
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.hrService.getCompanies().subscribe({
      next: (data) => {
        console.log(data);
        this.companies = data;
      },
      error: (errorMessage) => {
        console.log(errorMessage);
      },
    });
  }
}

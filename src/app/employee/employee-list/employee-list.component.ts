import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/share/service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeListArray: any;

  constructor(private service: EmpService) { }

  ngOnInit() {
    this.employeeList();
  }

  employeeList() {
    this.service.getEmployeeServie().subscribe(data => {
      this.employeeListArray = data.map(e => {
        return {
          id: e.payload.doc['id'],
          age: e.payload.doc.data()['age'],
          name: e.payload.doc.data()['name'],
          company: e.payload.doc.data()['company'],
          gender: e.payload.doc.data()['gender'],
          salary: e.payload.doc.data()['salary'],
        };
      });


    });
  }


}

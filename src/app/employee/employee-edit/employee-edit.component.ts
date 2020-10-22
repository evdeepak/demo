import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from 'src/app/share/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employeeListForm: FormGroup;
  isValidFormSubmitted: Boolean = false;
  id: any;
  employeeDetails:any

  constructor(private fb: FormBuilder, private service: EmpService, private snackBar: MatSnackBar,
    private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getDetils(this.id);
    console.log(this.id)

  }
  createForm() {
    this.employeeListForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      company: ['', Validators.required],
      salary: ['', Validators.required],
      gender: ['', Validators.required],

    });
  }

  getDetils(id){
    // this.service.getById(id)
    // console.log(this.service.getById(id))
    // .subscribe(data => {
    //   this.employeeDetails = data.map(e => {
    //     return {
    //       id: e.payload.doc['id'],
    //       age: e.payload.doc.data()['age'],
    //       name: e.payload.doc.data()['name'],
    //       company: e.payload.doc.data()['company'],
    //       gender: e.payload.doc.data()['gender'],
    //       salary: e.payload.doc.data()['salary'],
    //     };
    //     console.log(e)
    //   });
      // console.log(this.employeeDetails)


    // });

  }

  updateEmployee() {
    this.isValidFormSubmitted = false;
    if (this.employeeListForm.invalid) {
      this.isValidFormSubmitted = true;
      return;
    }
    this.service.createEmployee(
      this.employeeListForm.value.name,
      this.employeeListForm.value.age,
      this.employeeListForm.value.company,
      this.employeeListForm.value.salary,
      this.employeeListForm.value.gender,
    )
      .then(
        res => {
          this.snackBar.open('New Employee created', 'Undo', {
            duration: 3000
          });
          this.router.navigate(['/employee-list']);
          console.log(res);
        }
      )
  }

}

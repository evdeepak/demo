import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmpService } from 'src/app/share/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeListForm: FormGroup;
  isValidFormSubmitted: Boolean = false;

  constructor(private fb: FormBuilder, private service: EmpService, private snackBar: MatSnackBar,  private router: Router ) {
    this.createForm();
  }
  ngOnInit() {
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


  AddEmployee() {
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
        }
      )
  }
}

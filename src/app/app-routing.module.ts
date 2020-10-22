import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';


const routes: Routes = [
  {
    path: 'employee-list',
    component:  EmployeeListComponent
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent
  },
  {
    path: 'employee-edit',
    component: EmployeeEditComponent
  },
  {
    path: '',
    redirectTo: '/employee-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: EmployeeListComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

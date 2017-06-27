import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeListComponent} from './EmployeeListComponent/employee-list.component';
import {EmployeeDetailComponent} from './EmployeeDetailComponent/employee-detail.component';

const routes: Routes = [
    { path: 'employees',  component: EmployeeListComponent },
    { path: 'employee/:id',  component: EmployeeDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}

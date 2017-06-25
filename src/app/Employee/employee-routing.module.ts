import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeDetailComponent} from './EmployeeDetailComponent/employee-detail.component';

const routes: Routes = [
    { path: 'employees/:id',  component: EmployeeDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
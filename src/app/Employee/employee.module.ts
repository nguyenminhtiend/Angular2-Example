import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeDetailComponent} from './EmployeeDetailComponent/employee-detail.component';

import {EmployeeService} from './employee.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        EmployeeRoutingModule
    ],
    declarations: [
        EmployeeDetailComponent
    ],
    providers: [EmployeeService],
})
export class EmployeeModule {
}

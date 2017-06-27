import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeListComponent} from './EmployeeListComponent/employee-list.component';
import {EmployeeDetailComponent} from './EmployeeDetailComponent/employee-detail.component';
import {SorterColumnComponent} from '../CommonComponent/SorterColumnComponent/sorter-column.component';
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
        SorterColumnComponent,
        EmployeeListComponent,
        EmployeeDetailComponent
    ],
    providers: [EmployeeService],
})
export class EmployeeModule {
}

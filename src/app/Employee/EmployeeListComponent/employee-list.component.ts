import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
    employees: any[];
    criteria: any;
    columns: any[];
    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.initDefaultValue();
        this.getEmployeeByByCriteria();
    }

    sort(columnName: string): void {
        if (this.criteria.sortColumn === columnName) {
            this.criteria.sortAscending = !this.criteria.sortAscending;
        }else {
            this.criteria.sortColumn = columnName;
            this.criteria.sortAscending = true;
        }
        this.getEmployeeByByCriteria();
    }

    private initDefaultValue(): void {
        this.criteria = {
            searchTerm: '',
            currentPage: 1,
            itemPerPage: 10,
            sortColumn: 'FirstName',
            sortAscending: true
        };
        this.columns = [
            {name: 'FirstName', text: 'First Name'},
            {name: 'LastName', text: 'Last Name'},
            {name: 'Email', text: 'Email'},
            {name: 'Phone', text: 'Phone'},
            {name: 'Birthday', text: 'Birthday'},
            {name: 'Department', text: 'Department'}
        ];
    }

    getEmployeeByByCriteria(): void {
        this.employeeService.getEmployeeByByCriteria(this.criteria).subscribe((res: any) => {
            this.employees = res.listEmployee;
        }, (err: any) => {
            console.log(err);
        });
    }
}

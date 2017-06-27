import {Component, OnInit} from '@angular/core';
import {ActivatedRoute}   from '@angular/router';
import {Employee} from '../employee';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {EmployeeService} from '../employee.service';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent implements OnInit {
    employeeForm: FormGroup;
    departments: any[];

    constructor(private route: ActivatedRoute,
                private fb: FormBuilder,
                private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.initDepartment();
        this.initEmployeeForm();
        this.route.params.subscribe(params => {
            let id = +params['id'];
            if (id > 0) {
                this.getEmployeeById(id);
            }
        });
    }

    private initDepartment(): void {
        this.departments = [
            {id: 1, name: 'IT'},
            {id: 2, name: 'Human Resources'},
            {id: 3, name: 'BPO'}
        ];
    }

    private initEmployeeForm(): void {
        this.employeeForm = this.fb.group({
            id: [0],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            phone: ['', Validators.required],
            birthday: ['', Validators.required],
            departmentId: [0, Validators.required],
            rowVersion: ['']
        });
    }

    private getEmployeeById(id: number): void {
        this.employeeService.getEmployeeById(id)
            .subscribe((employee: Employee) => {
                this.employeeForm.setValue({
                    id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email,
                    phone: employee.phone,
                    birthday: employee.birthday,
                    departmentId: employee.departmentId,
                    rowVersion: employee.rowVersion
                });
            }, (err: any) => {
                // Log errors if any
                console.log(err);
            });
    }

    onSubmit(): void {
        this.employeeService.updateEmployee(this.employeeForm.value)
            .subscribe((employee: any) => {
                console.log('ok');
            }, (err: any) => {
                // Log errors if any
                console.log(err);
            });
    }
}

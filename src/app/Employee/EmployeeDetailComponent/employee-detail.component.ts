import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
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
        this.employeeForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            phone: ['', Validators.required],
            birthday: ['', Validators.required],
            departmentId: [2, Validators.required],
        });

    }

    private initDepartment(): void {
        this.departments = [
            {id: 1, name: 'IT'},
            {id: 2, name: 'Human Resources'},
            {id: 3, name: 'BPO'}
        ];
    }

    private getEmployeeById(): void {
        this.employeeService.getEmployeeById(1)
            .subscribe((employee: any) => {
                this.employeeForm.setValue({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email,
                    phone: employee.phone,
                    birthday: employee.birthday,
                    departmentId: employee.departmentId,
                });
            }, (err: any) => {
                // Log errors if any
                console.log(err);
            });
    }

    onSubmit(): void {

    }

    click(): void {
        this.getEmployeeById();
    }
}
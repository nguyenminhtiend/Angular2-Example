export class Employee {
    id: number;
    firstName: string;
    lastName?: string;
    email: string;
    phone: string;
    public birthday: any;
    departmentId: number;
    rowVersion: string;
}
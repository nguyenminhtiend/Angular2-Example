import {Injectable} from '@angular/core';
import {HttpInterceptor} from '../services/http.interceptor';
import {Observable} from 'rxjs/Observable';
import { Response, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class EmployeeService {
    url: string = '/api/employee/';

    constructor(private http: HttpInterceptor) {
    }

    getEmployeeByByCriteria(criteria: any): Observable<any> {
        let params = new URLSearchParams();
        params.append('searchTerm', criteria.searchTerm);
        params.append('currentPage', criteria.currentPage);
        params.append('itemPerPage', criteria.itemPerPage);
        params.append('sortColumn', criteria.sortColumn);
        params.append('sortAscending', criteria.sortAscending);

        let options = new RequestOptions({params: params});

        return this.http.get(this.url, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getEmployeeById(id: number): Observable<any> {
        return this.http.get(this.url + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateEmployee(employee: any): Observable<any> {
        return this.http.put(this.url + employee.id, employee)
            .map((res: Response) => res)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

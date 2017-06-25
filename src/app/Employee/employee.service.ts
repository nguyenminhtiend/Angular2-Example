import {Injectable} from '@angular/core';
import {HttpInterceptor} from '../services/http.interceptor';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EmployeeService {
    url: string = '/api/employee/';

    constructor(private http: HttpInterceptor) {
    }

    getEmployeeById(id: number): Observable<any> {
        return this.http.get(this.url + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

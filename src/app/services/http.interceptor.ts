import {Injectable} from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {AppSettings} from '../shares/appSettings';

@Injectable()
export class HttpInterceptor {
    constructor(private http: Http) {
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.get(this.getUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    private getUrl(url: string): string {
        return AppSettings.API_ENDPOINT + url;
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            // options.headers = new Headers({
            //     'Authorization': `Basic ${environment.basic_auth_token}`,
            //     'X-Auth-Token': localStorage.getItem('access_token')
            // });
        }
        return options;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log(res);
    }

    private onError(error: any): void {
        console.log(error);
    }

    private onFinally(): void {
        console.log('Completed!');
    }
}
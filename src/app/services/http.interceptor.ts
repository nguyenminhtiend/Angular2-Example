import {Injectable} from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {AppSettings} from '../shares/appSettings';

@Injectable()
export class HttpInterceptor {
    constructor(private http: Http) {
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(this.getUrl(url), this.requestOptions(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(this.getUrl(url), JSON.stringify(body), this.requestOptions(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(this.getUrl(url), JSON.stringify(body), this.requestOptions(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(this.getUrl(url), this.requestOptions(options));
    }

    private getUrl(url: string): string {
        return AppSettings.API_ENDPOINT + url;
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}

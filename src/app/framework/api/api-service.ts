import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Headers,RequestOptions,Http } from '@angular/http';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService
{
    constructor(private http:Http)
    {

    }

    post<TInput,TOutput>(url:string,data:TInput):void
    {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(url, data, options).pipe(retry(3),
        //                                                map(this.extractData),
        //                                                catchError(err));
    }

    get<TInput,TOutput>(urlstring,data:TInput):TOutput
    {
            return {} as TOutput;
    }
}
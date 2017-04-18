import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Request, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticatedHttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('My new request...');
    return super.request(url, options)
      .map(res => {
        if (res.status === 401) {
          alert('ERROR!!!');
        }

        return res;
      })
  }
}
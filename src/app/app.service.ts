import { Injectable } from '@angular/core';
import { HttpClientModule , HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  api = 'https://api.github.com/users/';
  clienId = 'f5932ab09eb08bbc6a8e';
  clientSecret = 'fe17ef500bd249ec86135934eeac3daa4a0d382b';
  sub: any;
   getUser(username: string): Observable<any> {
    const url = this.api + username;
    const params = new HttpParams().set('client_id', this.clienId).set('client_id', this.clientSecret);
    this.sub = this.http.get<any>(url, {params: params});

    return this.sub;
  }

}

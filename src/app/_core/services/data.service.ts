import { Injectable } from "@angular/core";
import { environment } from "@environment/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

let urlApi = "";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }
  public get(uri: string): Observable<any> {
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJu"
    );
    return this.http.get(urlApi + "/" + uri, httpOptions).pipe(
      tap(
        //Success
        () => {
          //Loading
        },
        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  public post(uri: string, data?: Object): Observable<any> {
    return this.http.post(urlApi + "/" + uri, data, httpOptions).pipe(
      tap(
        //Success
        () => {
          //Loading
        },
        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  handleErr(err) {
    return err;
  }
}

import {Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http'
import {Country} from './country';
import { Observable } from 'rxjs';
import { catchError, tap }  from 'rxjs/operators';
import { ErrorHandler} from '@angular/core';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl='http://localhost:3000/pays';
  constructor(private _http:HttpClient) { }
  getCountries(){
    return this._http.get<Country[]>(this.apiUrl);
  }
  /*getCountryById(SelectedCountry:string):Observable<any>{
    let param1 = new HttpParams().set('SelectedCountry',SelectedCountry);
    return this._http.get(this.apiUrl,{params:param1});
  }*/

  getCountryById(SelectedCountry: Number):Observable<any> {
    console.log(`http://localhost:3000/pays/${SelectedCountry}`,{ headers: new HttpHeaders().append('Content-Type', 'application json')})
    return this._http.get(`http://localhost:3000/pays/${SelectedCountry}`);
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}

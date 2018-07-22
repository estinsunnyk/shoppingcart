import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

  getService(apiUrl): Observable<any>{
    return this.http.get(apiUrl)
      .catch((error:any) => {
        return Observable.throw(error.statusText);
      });
  }
}

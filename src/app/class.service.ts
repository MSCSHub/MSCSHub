import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IClass } from './class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<IClass[]>{
    const returnResponse = this.http.get<IClass[]>("https://us-central1-utmcs-1bcf2.cloudfunctions.net/webApi/allClasses");
    console.log(returnResponse);
    return returnResponse;
  }
}

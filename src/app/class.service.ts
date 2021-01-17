import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getAllClasses() {
    const returnResponse = this.http.get("https://us-central1-utmcs-1bcf2.cloudfunctions.net/webApi/allClasses");
    console.log(returnResponse);
    return returnResponse;
  }
}

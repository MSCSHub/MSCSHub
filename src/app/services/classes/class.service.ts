import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClassData } from 'src/app/shared/class/class';
import { AngularFirestore } from '@angular/fire/firestore';
// import { IClass } from '../../class';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { IReview } from '../../review';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private _classes: BehaviorSubject<ClassData[]> = new BehaviorSubject([] as ClassData[])
  public classes: Observable<ClassData[]> = this._classes.asObservable()

  constructor(
    private afs: AngularFirestore  
  ) {
    this.afs.collection<ClassData>('Class')
      .valueChanges({idField: 'courseId'})
      .subscribe(data => {
        this._classes.next(data)
      })
  }

  // getAllClasses(): Observable<IClass[]>{
  //   const returnResponse = this.http.get<IClass[]>("https://us-central1-utmcs-1bcf2.cloudfunctions.net/webApi/allClasses");
  //   return returnResponse;
  // }
  // getAllReviewsForClass(id: String): Observable<IReview[]>{
  //   const returnResponse = this.http.get<IReview[]>("https://us-central1-utmcs-1bcf2.cloudfunctions.net/webApi/reviewsByClass/" + id);
  //   return returnResponse;
  // }
}

import { Injectable } from '@angular/core';
import { ClassData } from 'src/app/shared/class/class';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private _classes: ReplaySubject<ClassData[]> = new ReplaySubject()
  public classes: Observable<ClassData[]> = this._classes.asObservable()
  // private _website: ReplaySubject<string> = new ReplaySubject()
  public readonly website: string = environment.website
  public readonly degreeName: string = this.website === "computerScience" ? "Computer Science" : "Data Science"
  public readonly websiteName: string = this.website === "computerScience" ? "MSCSHub" : "MSDSHub"
  public readonly properName: string = this.website === "computerScience" ? "MSCS Hub" : "MSDS Hub"
  public readonly socialName: string = this.website === "computerScience" ? "Slack #MSCSHub" : "Discord"
  public readonly socialURL: string = this.website === "computerScience" ? "https://utmscso.slack.com/archives/C01QM0A19QR" : "https://discord.gg/SDh57AHQu3"
  public readonly redditName: string = this.website === "computerScience" ? "/r/MSCSO" : "/r/MSDSO"
  public readonly redditURL: string = this.website === "computerScience" ? "https://www.reddit.com/r/mscso" : "https://www.reddit.com/r/msdso"


  constructor(
    private afs: AngularFirestore  
  ) {
    this.updateCourseData()
  }

  updateCourseData(): void {
    let courseListener = this.afs.collection<ClassData>('Class')
    .valueChanges({idField: 'courseId'})
    .subscribe(data => {
      if(this.website == "computerScience") {
        data = data.filter(course => course.computerScience.isComputerScience)
        data.forEach(course => course.category = course.computerScience.category || course.category)
      } else if(this.website == "dataScience") {
        data = data.filter(course => course.dataScience.isDataScience)
        data.forEach(course => course.category = course.dataScience.category || course.category)
      } else {
        data = []
        window.alert("The application is misconfigured. Contact the website admins if this problem persists.")
      }
      this._classes.next(data)
      // if(data.length > 0) courseListener.unsubscribe()
    })
  }
}

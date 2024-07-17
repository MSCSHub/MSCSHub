import { Injectable } from '@angular/core';
import { ClassData } from 'src/app/shared/class/class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  public readonly degreeName: string = this.website === "computerScience" ? "Computer Science" : this.website === "dataScience" ? "Data Science" : "Artificial Intelligence";
  public readonly websiteName: string = this.website === "computerScience" ? "MSCSHub" : this.website === "dataScience" ? "MSDSHub" : "MSAIHub";
  public readonly websiteURL: string = this.website === "computerScience" ? "https://www.cs.utexas.edu/graduate-program/masters-program/online-option" : this.website === "dataScience" ? "https://ms-datascience.utexas.edu/" : "https://cdso.utexas.edu/msai";
  public readonly properName: string = this.website === "computerScience" ? "MSCS Hub" : this.website === "dataScience" ? "MSDS Hub" : "MSAI Hub";
  public readonly socialName: string = this.website === "computerScience" ? "Slack #MSCSHub" : this.website === "dataScience" ? "Discord" : "Discord";
  public readonly socialURL: string = this.website === "computerScience" ? "https://utmscso.slack.com/archives/C01QM0A19QR" : this.website === "dataScience" ? "https://discord.gg/SDh57AHQu3" : "https://discord.gg/SDh57AHQu3";
  public readonly redditName: string = this.website === "computerScience" ? "/r/MSCSO" : this.website === "dataScience" ? "/r/MSDSO" : "/r/AIHub";
  public readonly redditURL: string = this.website === "computerScience" ? "https://www.reddit.com/r/mscso" : this.website === "dataScience" ? "https://www.reddit.com/r/msdso" : "https://www.reddit.com/r/MSAI";



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
        data = data.filter(course => course?.computerScience?.isComputerScience ?? false)
        data.forEach(course => course.category = course.computerScience.category || course.category)
      } else if(this.website == "dataScience") {
        data = data.filter(course => course?.dataScience?.isDataScience ?? false)
        data.forEach(course => course.category = course.dataScience.category || course.category)
      } else if (this.website == "ai") {
        data = data.filter(course => course?.ai?.isAI ?? false);
        data.forEach(course => course.category = course.ai.category || course.category);
      } else {
        data = []
        window.alert("The application is misconfigured. Contact the website admins if this problem persists.")
      }
      this._classes.next(data)
    })
  }
}

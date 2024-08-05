import { Injectable } from '@angular/core';
import { ClassData } from 'src/app/shared/class/class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  MSCS: string = "computerScience";
  MSDS: string = "dataScience";
  MSAI: string = "ai";

  private _classes: ReplaySubject<ClassData[]> = new ReplaySubject()
  public classes: Observable<ClassData[]> = this._classes.asObservable()
  // private _website: ReplaySubject<string> = new ReplaySubject()
  public readonly website: string = environment.website
  public readonly degreeName: string = this.selectDegreeName();
  public readonly websiteName: string = this.selectWebsiteName();
  public readonly websiteURL: string = this.selectWebsiteURL();
  public readonly properName: string = this.selectProperName();
  public readonly socialName: string = this.selectSocialName();
  public readonly socialURL: string = this.selectSocialURL();
  public readonly redditName: string = this.selectRedditName();
  public readonly redditURL: string = this.selectRedditURL();


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
      } else {
        data = data.filter(course => course?.ai?.isArtificialIntelligence ?? false)
        data.forEach(course => course.category = course.dataScience.category || course.category)
      }
      this._classes.next(data)
    })
  }

  selectDegreeName(): string {
    switch (this.website) {
      case this.MSCS:
        return "Computer Science";
      case this.MSDS:
        return "Data Science";
      case this.MSAI:
        return "Artificial Intelligence"
      default:
        return "Computer Science";
    }
  }

  selectWebsiteName(): string {
    switch (this.website) {
      case this.MSCS:
        return "MSCS";
      case this.MSDS:
        return "MSDS";
      case this.MSAI:
        return "MSAI"
      default:
        return "MSCS";
    }
  }

  selectWebsiteURL(): string {
    switch (this.website) {
      case this.MSCS:
        return "https://cdso.utexas.edu/mscs/";
      case this.MSDS:
        return "https://cdso.utexas.edu/msds/";
      case this.MSAI:
        return "https://cdso.utexas.edu/msai/"
      default:
        return "https://cdso.utexas.edu/mscs/";
    }
  }

  selectProperName(): string {
    switch (this.website) {
      case this.MSCS:
        return "MSCS Hub";
      case this.MSDS:
        return "MSDS Hub";
      case this.MSAI:
        return "MSAI Hub"
      default:
        return "MSCS Hub";
    }
  }

  selectSocialName(): string {
    switch (this.website) {
      case this.MSCS:
        return "Slack #MSCSHub";
      case this.MSDS:
        return "Discord";
      case this.MSAI:
        return ""
      default:
        return "Slack #MSCSHub";
    }
  }

  selectSocialURL(): string {
    switch (this.website) {
      case this.MSCS:
        return "https://utmscso.slack.com/archives/C01QM0A19QR";
      case this.MSDS:
        return "https://discord.gg/SDh57AHQu3";
      case this.MSAI:
        return ""
      default:
        return "https://utmscso.slack.com/archives/C01QM0A19QR";
    }
  }

  selectRedditName(): string {
    switch (this.website) {
      case this.MSCS:
        return "/r/MSCSO";
      case this.MSDS:
        return "/r/MSDSO";
      case this.MSAI:
        return "/r/MSAIO"
      default:
        return "/r/MSCSO";
    }
  }

  selectRedditURL(): string {
    switch (this.website) {
      case this.MSCS:
        return "https://www.reddit.com/r/mscso";
      case this.MSDS:
        return "https://www.reddit.com/r/msdso";
      case this.MSAI:
        return "https://www.reddit.com/r/msaio"
      default:
        return "https://www.reddit.com/r/mscso";
    }
  }

}

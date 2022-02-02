import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { FaqEntry } from 'src/app/shared/faq/faq-entry';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private _faqData: ReplaySubject<FaqEntry[]> = new ReplaySubject()
  public faqData: Observable<FaqEntry[]> = this._faqData.asObservable()
  private _categories: ReplaySubject<string[]> = new ReplaySubject()
  public categories: Observable<string[]> = this._categories.asObservable()

  constructor(
    private afs: AngularFirestore
  ) {
    this.updateFaqData()
  }

  updateFaqData(): void {
    let faqListener = this.afs.collection<FaqEntry>('Faq')
      .valueChanges({idField: 'entryId'})
      .subscribe(data => {
        this._faqData.next(data)
        let bins: string[] = data.map(val => val.category)
        let categories: string[] = bins.filter((value, index) => bins.indexOf(value) === index)
        this._categories.next(categories)
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { Timestamp } from "@firebase/firestore-types";
import { AuthService } from 'src/app/services/auth/auth.service';
import { FaqService } from 'src/app/services/faq/faq-service.service';
import { FaqEntry } from 'src/app/shared/faq/faq-entry';

@Component({
  selector: 'faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  faqData: FaqEntry[] = []
  faqCategories: Record<string, FaqEntry[]> = {};
  isUserLoggedIn: boolean = false

  constructor(
    private faqService: FaqService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(result => this.isUserLoggedIn = result)
    this.getFaqData()
  }

  getFaqData(): void {
    this.faqService.faqData.subscribe(data => {
      this.faqData = data
      let bins: string[] = data.map(val => val.category)
      let categories: string[] = bins.filter((value, index) => bins.indexOf(value) === index)
      categories.forEach(value => this.faqCategories[value] = data.filter(entry => entry.category === value))
    })
  }

  formatSubtitle(ts: Timestamp): string {
    return `Last updated: ${ts.toDate().toLocaleDateString()}`
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private links = new Array<{title: string, path: string}>()
  private isLoggedIn = new Subject<boolean>()

  constructor() {
    this.addItem({title: 'Login', path: 'login'})
    this.isLoggedIn.next(false)
  }

  addItem(newLink: {title: string, path: string}) {
    this.links.push(newLink)
  }
}

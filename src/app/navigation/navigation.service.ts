// This was built with guidance from https://grokonez.com/frontend/angular/angular-6/angular-6-dynamic-navigation-bar-add-remove-route-dynamically
// The service is incomplete but has been a good learning experience

import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs'
import { NavigationNode } from './navigation'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
}


// export class NavigationService {
//   private links: NavigationNode[] = [];
//   private isLoggedIn = new Subject<boolean>()

//   constructor() {
//     this.addItem('Login', 'login')
//     this.isLoggedIn.next(false)
//   }

//   addItem(title: string, path: string) {
//     let newLink: NavigationNode = {
//       title: title,
//       url: path
//     }
//     this.links.push(newLink)
//   }

//   getLinks(): NavigationNode[] {
//     return this.links
//   }

//   getLoginStatus(): Subject<boolean> {
//     return this.isLoggedIn
//   }

//   updateLoginStatus(status: boolean): void {
//     this.isLoggedIn.next(status)
//     if (!status) {
//       this.clearAllItems()
//       this.addItem('Login', 'login')
//     }
//   }

//   updateNavAfterAuth(role: string): void {
//     this.removeItem('Login')
//     this.addItem('User Settings', 'user')
//     if(role === 'admin'){
//       this.addItem('Admin', 'admin')
//     }
//   }

//   removeItem(name: string): void {
//     this.links = this.links.filter(obj => obj.title != name)
//   }

//   clearAllItems(): void {
//     this.links.length = 0
//   }
// }

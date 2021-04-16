import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { DialogNotLoggedIn } from '../shared/dialog/not-logged-in/dialog-not-logged-in.component';
import { DialogNotVerified } from '../shared/dialog/not-verified/dialog-not-verified.component';
import { MatDialog } from '@angular/material/dialog';
import { FbUser } from '../shared/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  private isLoggedIn: boolean = false
  private isVerified: boolean = false
  private userData: FbUser | undefined

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.auth.isLoggedIn.subscribe(state => {this.isLoggedIn = state})
    this.auth.userData.subscribe(data => {this.userData = data})
    this.auth.isVerified.subscribe(state => this.isVerified = state)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.debug("AuthGuard: CanActivate? - emailVerified?", this.isLoggedIn, this.isVerified)
    if (this.isLoggedIn && this.isVerified) {
      return true
    } else {
      if(!this.isLoggedIn) {this.openLoginDialog()}
      else if(!this.isVerified) {this.openVerifyDialog()}
      return false
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(DialogNotLoggedIn)
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['login'])
    })
  }

  openVerifyDialog() {
    const dialogRef = this.dialog.open(DialogNotVerified)
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['verifyEmail'])
    })
  }
}

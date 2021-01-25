import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { DialogNotLoggedIn } from '../shared/dialog/not-logged-in/dialog-not-logged-in.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  private isLoggedIn: boolean = false

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.auth.isLoggedIn.subscribe(state => {
      this.isLoggedIn = state
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true
    } else {
      // window.alert("Please log in before leaving a review. This helps us ensure that only UT students are able to submit course reviews.")
      // this.router.navigate(['login'])
      this.openDialog()
      return false
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogNotLoggedIn)
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed!", result)
      this.router.navigate(['login'])
    })
  }
}

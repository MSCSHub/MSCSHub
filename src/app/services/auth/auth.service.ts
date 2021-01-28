// Following this guide. Mostly implemented but untested, probably best to learn more then come back.

import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

import { FbUser, User } from '../../shared/user/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userData: ReplaySubject<FbUser> = new ReplaySubject()
  public userData: Observable<FbUser> = this._userData.asObservable()
  private _isLoggedIn: ReplaySubject<boolean> = new ReplaySubject()
  public isLoggedIn: Observable<boolean> = this._isLoggedIn.asObservable()

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { 
    if(localStorage.getItem('user') != 'null') {
      this._isLoggedIn.next(true)
    }
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this._userData.next(user)
        this._isLoggedIn.next(true)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        this._isLoggedIn.next(false)
        // this._userData.next()
        localStorage.setItem('user', JSON.stringify(null))
      }
    })
  }

  setUserData(user: firebase.default.User | null) {
    if (!user) {
      localStorage.setItem('user', JSON.stringify(null))
      return
    }
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)
    this._userData.next(user)
  }

  signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home'])
        })
        this.setUserData(result.user)
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }

  signUp(email: string, password: string, firstName: string, lastName: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        this.setUserData(userCredential.user)
        userCredential.user?.sendEmailVerification()
        userCredential.user?.updateProfile({displayName: `${firstName} ${lastName}`})
        this.router.navigate(['verifyEmail'])
      })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.setUserData(null)
      this._isLoggedIn.next(false)
      this.router.navigate(['login'])
    }).catch((error) => { console.log(error) })
  }

  forgotPassword(email: string){
    return this.afAuth.sendPasswordResetEmail(email)
      .then(_ => {
        window.alert('Password reset email has been sent. Check your email inbox to proceed.')
        this.router.navigate(['login'])
      })
      .catch(error => {window.alert(error)})
  }
}

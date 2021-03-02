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
  private _userData: ReplaySubject<FbUser> = new ReplaySubject(1)
  public userData: Observable<FbUser> = this._userData.asObservable()
  private _isLoggedIn: ReplaySubject<boolean> = new ReplaySubject(1)
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
        // this._userData.next(user)
        this.setUserData(user)
        this._isLoggedIn.next(true)
      } else {
        this._isLoggedIn.next(false)
        this._userData.next(undefined)
        localStorage.setItem('user', JSON.stringify(null))
      }
    })
  }

  setUserData(user: FbUser | null) {
    if (!user) {
      localStorage.setItem('user', JSON.stringify(null))
      return
    }
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)
    var docRef = this.afs.collection("UserExtraData").doc(user?.uid)
    docRef.get().subscribe(doc => {
      console.log("Auth: Extra User Data - ", doc)
      const data: FbUser = doc.data() as FbUser
      user.firstSemester = data?.firstSemester
      user.firstName = data?.firstName
      user.lastName = data?.lastName
      user.slackId = data?.slackId
      localStorage.setItem('user', JSON.stringify(user))
      this._userData.next(user)
    })
    // .then((doc: { data: () => FbUser; }) => {
    // })
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

  signUp(email: string, password: string, firstName: string, lastName: string, firstSemester: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        this.setUserData(userCredential.user)
        userCredential.user?.sendEmailVerification()
        userCredential.user?.updateProfile({displayName: `${firstName} ${lastName}`})
        this.afs.collection("UserExtraData").doc(userCredential.user?.uid).set({
          uid: userCredential.user?.uid,
          slackId: null,
          firstSemester: firstSemester,
          firstName: firstName,
          lastName: lastName
        })
        this.router.navigate(['verifyEmail'])
      })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.setUserData(null)
      this._isLoggedIn.next(false)
      this._userData.next(undefined)
      // this.router.navigate(['login'])
    }).then(_ => {
      this.router.navigate(['logout'])
    })
    .catch((error) => { console.log(error) })
  }

  forgotPassword(email: string){
    return this.afAuth.sendPasswordResetEmail(email)
      .then(_ => {
        window.alert('Password reset email has been sent. Check your email inbox to proceed.')
        this.router.navigate(['login'])
      })
      .catch(error => {window.alert(error)})
  }
  updateUserExtraData(firstName: string, lastName: string, firstSemester: string) {
    const displayName = `${firstName} ${lastName}`
    // this.userData.subscribe((user: FbUser) => {
      
    // })
    this.afAuth.currentUser.then((user: FbUser | null) => {
      user?.updateProfile({displayName: displayName})
      this.afs.collection("UserExtraData").doc(user?.uid).set({
        firstSemester: firstSemester,
        firstName: firstName,
        lastName: lastName
      })
      this.setUserData(user)
      this.router.navigate(['settings'])
    })
    return
  }
}

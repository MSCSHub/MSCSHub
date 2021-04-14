// Following this guide. Mostly implemented but untested, probably best to learn more then come back.

import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

import { FbUser } from '../../shared/user/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userData: ReplaySubject<FbUser> = new ReplaySubject(1)
  public userData: Observable<FbUser> = this._userData.asObservable()
  private _isLoggedIn: ReplaySubject<boolean> = new ReplaySubject(1)
  public isLoggedIn: Observable<boolean> = this._isLoggedIn.asObservable()
  private _isVerified: ReplaySubject<boolean> = new ReplaySubject(1)
  public isVerified: Observable<boolean> = this._isVerified.asObservable()

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { 
    this.afs.firestore.enablePersistence().catch(err => console.error("Persistence failed to enable, error:", err))
    let localData = localStorage.getItem('user')
    if(localData != 'null' && localData) {
      this._isLoggedIn.next(true)
      let parsedData = JSON.parse(localData)
      this._userData.next(parsedData)
      this._isVerified.next(parsedData.emailVerified)
    }
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.setUserData(user)
        this._isLoggedIn.next(true)
        this._isVerified.next(user.emailVerified)
      } else {
        this._isLoggedIn.next(false)
        this._isVerified.next(false)
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
      const data: FbUser = doc.data() as FbUser
      user.firstSemester = data?.firstSemester
      user.firstName = data?.firstName
      user.lastName = data?.lastName
      user.slackId = data?.slackId
      localStorage.setItem('user', JSON.stringify(user))
      this._userData.next(user)
    })
  }

  signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home'])
        })
        this.setUserData(result.user)
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
    }).then(_ => {
      this.router.navigate(['logout'])
    })
    .catch((error) => { console.error("Auth: logout - ", error) })
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

  resendVerification() {
    return this.afAuth.currentUser.then((user: FbUser | null) => {
      user?.sendEmailVerification()
    })
  }
}

// Following this guide. Mostly implemented but untested, probably best to learn more then come back.

import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { FbUser, User } from '../../shared/user/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: FbUser | undefined

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
  ) { 
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user
        localStorage.setItem('user', JSON.stringify(this.userData))
      } else {
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
    this.userData = user
  }

  signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("signed in successfully!")
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

  forgotPassword(){
    if(!this.userData?.email){return window.alert('User does not have an email listed')}
    return this.afAuth.sendPasswordResetEmail(this.userData.email)
      .then(_ => {
        window.alert('Password reset email has been sent. Check your email inbox to proceed.')
      })
      .catch(error => {window.alert(error)})
  }

  get isLoggedIn(): boolean {
    if(this.userData?.uid && this.userData.emailVerified) {return true}
    return false
  }
}

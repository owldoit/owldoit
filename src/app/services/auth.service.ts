import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

   async googleSignin() {
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.afAuth.auth.signInWithPopup(provider);
     return this.updateUserData(credential.user);
   }

   async signOut() {
     await this.afAuth.auth.signOut();
     return this.router.navigate(['/']);
   }

   private updateUserData({ uid, email, displayName, photoURL }: User) {
     // sets user data from firestore
     const userRef:  AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

     const data = {
       uid,
       email,
       displayName,
       photoURL
     };

     return userRef.set(data, { merge: true });


   }
}
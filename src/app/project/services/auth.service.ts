// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private tokenKey = 'auth_token';
//   private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
//   loggedIn$ = this.loggedInSubject.asObservable();

//   private hasToken(): boolean {
//     return !!localStorage.getItem(this.tokenKey);
//   }

//   register(token: string): void {
//     localStorage.setItem(this.tokenKey, token);
//     this.loggedInSubject.next(true);
//   }

//   login(token: string): void {
//     localStorage.setItem(this.tokenKey, token);
//     this.loggedInSubject.next(true);
//   }

//   logout(): void {
//     localStorage.removeItem(this.tokenKey);
//     this.loggedInSubject.next(false);
//   }

//   isLoggedIn(): boolean {
//     return this.loggedInSubject.value;
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token'; 
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken()); 
  loggedIn$ = this.loggedInSubject.asObservable(); 

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  register(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.loggedInSubject.next(true);
  }

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.loggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}

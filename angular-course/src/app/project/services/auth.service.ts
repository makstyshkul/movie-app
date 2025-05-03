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
  private tokenKey = 'auth_token'; // Ключ для зберігання токена в localStorage
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken()); // Стан авторизації
  loggedIn$ = this.loggedInSubject.asObservable(); // Observable для слідкування за станом авторизації

  // Перевірка, чи є токен в localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Реєстрація користувача (збереження токена)
  register(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.loggedInSubject.next(true);
  }

  // Логін користувача (збереження токена)
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.loggedInSubject.next(true);
  }

  // Вихід користувача (видалення токена)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedInSubject.next(false);
  }

  // Перевірка, чи є користувач залогінений
  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}

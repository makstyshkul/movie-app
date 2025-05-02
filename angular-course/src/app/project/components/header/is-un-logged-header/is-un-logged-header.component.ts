import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SignupPopupComponent } from '../../signup-popup/signup-popup.component';
import { LoginPopupComponent } from '../../login-popup/login-popup.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-is-un-logged-header',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, SignupPopupComponent, LoginPopupComponent, RouterModule],
  templateUrl: './is-un-logged-header.component.html',
  styleUrls: ['./is-un-logged-header.component.scss']
})
export class IsUnLoggedHeaderComponent {
  showLogin = false;
  showRegister = false;

  constructor(private router: Router) {}

  openLogin() {
    this.showLogin = true;
  }

  openRegister() {
    this.showRegister = true;
  }

  closeLogin() {
    this.showLogin = false;
  }

  closeRegister() {
    this.showRegister = false;
  }

  handleLogin(data: { email: string; password: string }) {
    console.log('Login:', data);
    this.closeLogin();
  }

  handleRegister(data: { name: string; email: string; password: string }) {
    console.log('Register:', data);
    this.closeRegister();
  }

  navigateToCommunity() {
    this.router.navigate(['/community']);
  }
}

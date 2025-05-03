import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-login-popup',
  standalone: true,
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginPopupComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() loggedIn = new EventEmitter<{ email: string; password: string }>();

  loginForm: FormGroup<LoginForm>;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: this.fb.control('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  close() {
    this.closed.emit();
  }

  submit() {
	if (this.loginForm.valid) {
	  const { email, password } = this.loginForm.getRawValue();
 
	  const fakeToken = 'mock-token';
 
	  this.authService.login(fakeToken);  
	  this.loggedIn.emit({ email, password });
	  this.close();
	  this.router.navigate(['/home']);
	} else {
	  this.loginForm.markAllAsTouched();
	}
 }

 logout() {
	this.authService.logout();
	this.router.navigate(['/home']);
 }
}

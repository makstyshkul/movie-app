import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type RegisterForm = {
	name: FormControl<string>;
	email: FormControl<string>;
	password: FormControl<string>;
	confirmPassword: FormControl<string>;
 };


@Component({
  selector: 'app-signup-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-popup.component.html',
  styleUrl: './signup-popup.component.scss'
})
export class SignupPopupComponent {
	@Output() closed = new EventEmitter<void>();
  @Output() registered = new EventEmitter<{ name: string; email: string; password: string }>();
  registerForm: FormGroup<RegisterForm>;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
      confirmPassword: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    });
  }
  close() {
    this.closed.emit();
  }
  submit() {
	if (this.registerForm.invalid) {
	  this.registerForm.markAllAsTouched();
	  return;
	}
	const { password, confirmPassword, name, email } = this.registerForm.getRawValue();
	if (password !== confirmPassword) {
	  this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true });
	  return;
	}
	const fakeToken = 'mock-token'; 
	this.authService.register(fakeToken);  
	this.router.navigate(['/home']);
	this.close();
 }
  logout() {
	this.authService.logout();
	this.router.navigate(['/home']);
 }
}

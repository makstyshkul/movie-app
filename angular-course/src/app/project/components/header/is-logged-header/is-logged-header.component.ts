import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-is-logged-header',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule],
  templateUrl: './is-logged-header.component.html',
  styleUrl: './is-logged-header.component.scss'
})

export class IsLoggedHeaderComponent {
	isDropdownVisible = false;

	  constructor(private router: Router, private authService: AuthService) {}

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-avatar')) {
      this.isDropdownVisible = false;
    }
  }

  onAvatarClick(event: MouseEvent): void {
	event.stopPropagation();
	this.isDropdownVisible = !this.isDropdownVisible;
 }

  logout() {
	this.authService.logout();
	this.router.navigate(['/home']);
 }
}

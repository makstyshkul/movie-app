import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommunityPageComponent } from '../../../pages/community-page/community-page.component';

@Component({
  selector: 'app-is-logged-header',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, RouterModule],
  templateUrl: './is-logged-header.component.html',
  styleUrl: './is-logged-header.component.scss'
})

export class IsLoggedHeaderComponent {
	isDropdownVisible = false;


@Input() subscribedMovies: { id: number; title: string }[] = [];

@Input() subscriptionCount: number = 0;

showSubscriptionDropdown = false;

toggleSubscriptionDropdown(): void {
  this.showSubscriptionDropdown = !this.showSubscriptionDropdown;
}

@Output() unsubscribeMovie = new EventEmitter<number>();

unsubscribe(movieId: number): void {
  this.unsubscribeMovie.emit(movieId);
}


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

 navigateToCommunity() {
	this.router.navigate(['/community']);
 }

 navigateToMovies() {
	this.router.navigate(['/movies']);
 }

 navigateToProfile() {
	this.router.navigate(['/profile']);
 }

 navigateToTop() {
	this.router.navigate(['/top']);
 }
}

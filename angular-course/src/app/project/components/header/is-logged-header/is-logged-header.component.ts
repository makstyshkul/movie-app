import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-is-logged-header',
  standalone: true,
  imports: [],
  templateUrl: './is-logged-header.component.html',
  styleUrl: './is-logged-header.component.scss'
})

export class IsLoggedHeaderComponent {
	isDropdownVisible = false;

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

  logout(): void {
    console.log('User logged out');
  }
}

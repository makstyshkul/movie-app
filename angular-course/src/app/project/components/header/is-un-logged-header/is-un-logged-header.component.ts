import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-is-un-logged-header',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule],
  templateUrl: './is-un-logged-header.component.html',
  styleUrl: './is-un-logged-header.component.scss'
})
export class IsUnLoggedHeaderComponent {

}

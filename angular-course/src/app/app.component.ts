import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./project/pages/home-page/home-page.component";
import { AuthService } from './project/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{

	@Input() data: any;

isLoggedIn = false;
 
	constructor(private authService: AuthService) {}
 
	ngOnInit() {
	  this.authService.loggedIn$.subscribe((status) => {
		 this.isLoggedIn = status;
	  });
	}
}

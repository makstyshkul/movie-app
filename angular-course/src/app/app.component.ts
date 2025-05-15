import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './project/services/auth.service';
import { RouterModule } from '@angular/router';
import { MoviePageComponent } from "./project/pages/movie-page/movie-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MoviePageComponent],
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

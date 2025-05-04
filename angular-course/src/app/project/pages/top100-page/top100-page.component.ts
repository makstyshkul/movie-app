import { Component } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { nowPlayingMovies } from '../../../../assets/data/mock-data';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-top100-page',
  standalone: true,
  imports: [CommonModule ,IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent],
  templateUrl: './top100-page.component.html',
  styleUrl: './top100-page.component.scss'
})
export class Top100PageComponent {
	topMovies = nowPlayingMovies;

	isLoggedIn: boolean = false;

	  constructor(
		private authService: AuthService, 
) {}



 
	ngOnInit() {

		this.authService.loggedIn$.subscribe((status) => {
			this.isLoggedIn = status;
		 });

	}
}

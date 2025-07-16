import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstviewComponent } from "./firstview/firstview.component";
import { JustReleaseComponent } from "./just-release/just-release.component";
import { PopularComponent } from "./popular/popular.component";
import { FeaturedComponent } from "./featured/featured.component";
import { MoviesComponent } from "./movies/movies.component";
import { SeriesComponent } from "./series/series.component";
import { MoviesAwardsComponent } from "./movies-awards/movies-awards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import {IsUnLoggedHeaderComponent} from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FirstviewComponent, JustReleaseComponent, PopularComponent, FeaturedComponent, MoviesComponent, SeriesComponent, MoviesAwardsComponent, FooterComponent, IsUnLoggedHeaderComponent, IsLoggedHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit {
	isLoggedIn: boolean = false;
 
	constructor(private authService: AuthService) {}
 
	ngOnInit() {
	  this.authService.loggedIn$.subscribe((status) => {
		 this.isLoggedIn = status;  
	  });
	}
 }

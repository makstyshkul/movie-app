import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { nowPlayingMovies } from '../../../../assets/data/mock-data';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule,IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent, FormsModule, RouterModule,],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})


export class MoviesPageComponent {

	movies = nowPlayingMovies;
	filteredMovies = this.movies;
	isLoggedIn: boolean = false;

	genres: string[] = ['Action', 'Comedy', 'Drama', 'Horror']; 
	years: string[] = [];
	ratings: number[] = [9, 8, 7, 6, 5];

	selectedGenre = '';
	selectedYear = '';
	selectedRating = '';
	searchTerm: string = '';


  constructor(
	private authService: AuthService, 
	private route: ActivatedRoute,
	private router: Router) {}

	ngOnInit() {
		this.authService.loggedIn$.subscribe((status) => {
		  this.isLoggedIn = status;
		});
	 
		this.route.queryParams.subscribe(params => {
			this.selectedGenre = params['genre'] || '';
			this.selectedYear = params['year'] || '';
			this.selectedRating = params['rating'] || '';
			this.searchTerm = params['search'] || '';
			this.filterMovies(false);
		 });
		this.years = Array.from(new Set(this.movies.map(movie => movie.release_date?.slice(0, 4)))).sort((a, b) => +b - +a);
}


filterMovies(updateUrl = true) {
	this.filteredMovies = this.movies.filter((movie) => {
	  const movieYear = movie.release_date?.slice(0, 4);
	  const rating = movie.vote_average;
	  const titleMatch = movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
	  const genreMatch = this.selectedGenre ? movie.genre_name?.includes(this.selectedGenre) : true;
	  const yearMatch = this.selectedYear ? movieYear === this.selectedYear : true;
	  const ratingMatch = this.selectedRating ? rating >= +this.selectedRating : true;
 
	  return titleMatch && genreMatch && yearMatch && ratingMatch;
	});
 
	if (updateUrl) {
	  this.router.navigate([], {
		 relativeTo: this.route,
		 queryParams: {
			genre: this.selectedGenre || null,
			year: this.selectedYear || null,
			rating: this.selectedRating || null,
			search: this.searchTerm || null
		 },
		 queryParamsHandling: 'merge'
	  });
	}
 }

 clearFilters() {
	this.selectedGenre = '';
	this.selectedYear = '';
	this.selectedRating = '';
	this.searchTerm = '';
	this.filterMovies(); 
 }
}

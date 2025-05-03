import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { nowPlayingMovies } from '../../../../assets/data/mock-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule,IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent, FormsModule],
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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

	 this.years = Array.from(new Set(this.movies.map(movie => movie.release_date?.slice(0, 4)))).sort((a, b) => +b - +a);
  }


  filterMovies() {
	this.filteredMovies = this.movies.filter((movie) => {
	  const movieYear = movie.release_date?.slice(0, 4);
	  const rating = movie.vote_average;
	  const genreMatch = this.selectedGenre ? movie.genre_name?.includes(this.selectedGenre) : true;
	  const yearMatch = this.selectedYear ? movieYear === this.selectedYear : true;
	  const ratingMatch = this.selectedRating ? rating >= +this.selectedRating : true;

	  return genreMatch && yearMatch && ratingMatch;
	});
 }

 clearFilters() {
	this.selectedGenre = '';
	this.selectedYear = '';
	this.selectedRating = '';
	this.filteredMovies = this.movies;
 }


}

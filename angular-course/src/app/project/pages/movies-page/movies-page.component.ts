import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieSummaryWithGenre } from '../../models/movie-summary.model';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [
    CommonModule,
    IsLoggedHeaderComponent,
    IsUnLoggedHeaderComponent,
    FooterComponent,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  isLoggedIn = false;

  genres: string[] = [];
  genreMap: { [id: number]: string } = {};

  years: string[] = [];
  ratings: number[] = [9, 8, 7, 6, 5];

  selectedGenre = '';
  selectedYear = '';
  selectedRating = '';
  searchTerm = '';

  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.movieService.getGenres().subscribe(genreResponse => {
      this.genreMap = genreResponse.genres.reduce((map: any, genre: any) => {
        map[genre.id] = genre.name;
        return map;
      }, {});
      this.genres = genreResponse.genres.map((g: any) => g.name);
    });

    this.route.queryParams.subscribe(params => {
      this.selectedGenre = params['genre'] || '';
      this.selectedYear = params['year'] || '';
      this.selectedRating = params['rating'] || '';
      this.searchTerm = params['search'] || '';

      this.currentPage = 1;
      this.movies = [];
      this.loadMovies();
    });
  }

  loadMovies() {
    if (this.isLoading || this.currentPage > this.totalPages) return;
    this.isLoading = true;

    this.movieService.getNowPlayingMovies(this.currentPage).subscribe(response => {
      const newMovies = response.results.map((movie: any) => ({
        ...movie,
        genre_name: movie.genre_ids.map((id: number) => this.genreMap[id]).filter(Boolean)
      }));

      this.movies = [...this.movies, ...newMovies];
      this.totalPages = response.total_pages;
      this.isLoading = false;

      this.years = Array.from(new Set(this.movies.map(movie => movie.release_date?.slice(0, 4))))
        .sort((a, b) => +b - +a);

      this.filterMovies(false);
    });
  }

loadMore() {
	this.currentPage++;
	this.loadMovies();
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


   goToMovie(movieId: number) {
		this.router.navigate(['/movie', movieId]);
	}
}


import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { RecommendationService } from '../../services/RecommendationService.service';

@Component({
  selector: 'app-recommended-page',
  standalone: true,
  imports: [
    IsLoggedHeaderComponent,
    IsUnLoggedHeaderComponent,
    FooterComponent,
    CommonModule,
    MovieCardComponent
  ],
  templateUrl: './recommended-page.component.html',
  styleUrls: ['./recommended-page.component.scss']
})
export class RecommendedPageComponent implements OnInit {

  isLoggedIn: boolean = false;
  recommendedMovies: Movie[] = [];
  currentPage: number = 1;
  hasMore: boolean = true;
  userMovies: Movie[] = [];

  constructor(
    private recommendationService: RecommendationService,
    private userService: MovieService,
    private authService: AuthService
  ) {}

 ngOnInit(): void {
  this.authService.loggedIn$.pipe(take(1)).subscribe((status) => {
    this.isLoggedIn = status;

    if (status) {
      this.userMovies = [
        ...this.userService.getFavorites(),
        ...this.userService.getWatched()
      ];
      this.loadRecommendations();
    } else {
      this.loadPopular();
    }
  });
}

  loadPopular(): void {
    this.recommendationService.getPopularMovies(this.currentPage).subscribe(movies => {
      if (movies.length === 0) {
        this.hasMore = false;
      } else {
        this.recommendedMovies = [...this.recommendedMovies, ...movies];
      }
    });
  }

  loadRecommendations(): void {
	console.log('userMovies:', this.userMovies);

    this.recommendationService.getRecommendations(this.userMovies, this.currentPage).subscribe(movies => {
      if (movies.length === 0) {
        this.hasMore = false;
      } else {
        this.recommendedMovies = [...this.recommendedMovies, ...movies];
      }
    });
  }

  loadMore(): void {
    this.currentPage++;
    this.isLoggedIn ? this.loadRecommendations() : this.loadPopular();
  }
}

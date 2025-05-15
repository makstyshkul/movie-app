import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "../../components/footer/footer.component";
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent, IsLoggedHeaderComponent, IsUnLoggedHeaderComponent],
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'] 
})
export class MoviePageComponent implements OnInit {
  movie: Movie | null = null;
  trailerUrl: SafeResourceUrl | null = null;
  liked: boolean = false;
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
	 private authService: AuthService,
  ) {}

  ngOnInit(): void {

	this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

	console.log('MoviePageComponent INIT');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const movieId = +id;

      this.movieService.getMovieDetails(movieId).subscribe(movie => {
        console.log('Fetched movie:', movie);
        this.movie = movie;
      });

      this.movieService.getMovieVideos(movieId).subscribe(videos => {
        const trailer = videos.results.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
        if (trailer && trailer.key) {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      });
    }
  }


  addToWatchLater() {
  if (this.movie) {
    this.movieService.addToWatchLater(this.movie);
  }
}

markAsWatched() {
  if (this.movie) {
    this.movieService.markAsWatched(this.movie);
  }
}

toggleLike() {
  this.liked = !this.liked;
  if (this.movie) {
    this.movieService.setLiked(this.movie.id, this.liked, this.movie);
  }
}
}

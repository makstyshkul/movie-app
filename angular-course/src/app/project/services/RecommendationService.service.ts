import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";
import { map, Observable } from "rxjs";
import { environment } from "../enviroment";

@Injectable({ providedIn: 'root' })
export class RecommendationService {

  private apiKey = environment.TMDB_API_KEY;

  constructor(private http: HttpClient) {}

  getRecommendations(userMovies: Movie[], page: number = 1): Observable<Movie[]> {
    const genreCount: { [genreId: number]: number } = {};

    userMovies.forEach(movie => {
      movie.genre_ids?.forEach(genre => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });

    const topGenres = Object.entries(genreCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id]) => id)
      .join(',');

    if (!topGenres) {
      return this.getPopularMovies(page);
    }

    return this.http.get<{ results: Movie[] }>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${topGenres}&sort_by=popularity.desc&page=${page}`
    ).pipe(map(res =>
      res.results.filter(movie =>
        !userMovies.some(userMovie => userMovie.id === movie.id)
      )
    ));
  }

  getPopularMovies(page: number = 1): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}`
    ).pipe(map(res => res.results));
  }
}

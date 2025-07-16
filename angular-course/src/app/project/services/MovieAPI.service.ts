import { HttpClient } from "@angular/common/http";
import { environment } from "../enviroment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })


export class MovieApiService {
  private apiKey = environment.TMDB_API_KEY;
  private baseUrl = environment.TMDB_BASE_URL;

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieVideo(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../enviroment'; 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
	private watchLaterList: Movie[] = [];
	private watchedList: Movie[] = [];
	private likedList: Movie[] = [];
	private apiKey = environment.TMDB_API_KEY;
	private baseUrl = environment.TMDB_BASE_URL;

	constructor(private http: HttpClient) {} 

 getMovieDetails(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
}

  getMovieVideos(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`);
  }

getLikedMap(): { [key: number]: boolean } {
  const data = localStorage.getItem('liked');
  return data ? JSON.parse(data) : {};
}

isMovieLiked(movieId: number): boolean {
  return this.getLikedMap()[movieId] === true;
}

getNowPlayingMovies(page: number = 1): Observable<any> {
  return this.http.get<any>(
    `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`
  );
}

getGenres(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`);
}

getWatchLater() {
	return this.watchLaterList;
}
getWatched() {
	return this.watchedList;
}
getFavorites() {
	return this.likedList;
}

  addToWatchLater(movie: Movie) {
    if (!this.watchLaterList.find(m => m.id === movie.id)) {
      this.watchLaterList.push(movie);
    }
  }

  markAsWatched(movie: Movie) {
    if (!this.watchedList.find(m => m.id === movie.id)) {
      this.watchedList.push(movie);
    }
  }

  setLiked(id: number, liked: boolean, movie?: Movie) {
    if (liked && movie && !this.likedList.find(m => m.id === id)) {
      this.likedList.push(movie);
    } else if (!liked) {
      this.likedList = this.likedList.filter(m => m.id !== id);
    }
  }

  removeFromList(list: 'watch' | 'watched' | 'favorite', id: number) {
    if (list === 'watch') this.watchLaterList = this.watchLaterList.filter(m => m.id !== id);
    if (list === 'watched') this.watchedList = this.watchedList.filter(m => m.id !== id);
    if (list === 'favorite') this.likedList = this.likedList.filter(m => m.id !== id);
  }
}

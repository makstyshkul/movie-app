import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import MovieData from '../../../../assets/data/mock-data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})

export class MovieListComponent {

	movies = MovieData;
	favorites: object[] = [];
	watchLater: object[] = [];


	handleToFavorites(movie: object): void{
		if(!this.favorites.includes(movie)){
			this.favorites.push(movie)
		}
	}

	handleToWatchList(movie: object): void{
		if(!this.watchLater.includes(movie)){
			this.watchLater.push(movie)
		}
	}
}

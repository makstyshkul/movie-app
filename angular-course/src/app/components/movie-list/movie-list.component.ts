import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import MovieData from '../../../assets/data/mock-data.json';
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

	favorites: string[] = [];
	watchLater: string[] = [];


	handleToFavorites(title: string): void{
		if(!this.favorites.includes(title)){
			this.favorites.push(title)
		}
	}

	handleToWatchList(title: string): void{
		if(!this.watchLater.includes(title)){
			this.watchLater.push(title)
		}
	}
}

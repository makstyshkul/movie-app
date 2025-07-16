import { Component, signal } from '@angular/core';
import {topRatedMovies} from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})

export class FeaturedComponent {

	movies = topRatedMovies;

	addToWatchlist(movie: any) {
		// this.watchlistService.add(movie);
	}

}

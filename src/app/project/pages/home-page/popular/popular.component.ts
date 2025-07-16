import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {popularMovies} from '../../../../../assets/data/mock-data';


@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {

	// movies = popularMovies;

	movies = popularMovies.map((movie, index) => ({
		...movie,
		number: index + 1
	 }));

}

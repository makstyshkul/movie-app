import { Component } from '@angular/core';
import { nowPlayingMovies } from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

	movies = nowPlayingMovies;

}

import { Component } from '@angular/core';
import { popularMovies, topRatedMovies } from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-movies-awards',
  standalone: true,
  imports: [CarouselModule, ListboxModule],
  templateUrl: './movies-awards.component.html',
  styleUrl: './movies-awards.component.scss'
})
export class MoviesAwardsComponent {

	movies = topRatedMovies;

	popMovies = popularMovies;

}

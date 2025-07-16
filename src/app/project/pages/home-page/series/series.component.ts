import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { topRatedMovies } from '../../../../../assets/data/mock-data';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {

	movies = topRatedMovies;

}

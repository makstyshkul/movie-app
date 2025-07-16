import { Component, Input } from '@angular/core';
import {nowPlayingMovies} from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-just-release',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './just-release.component.html',
  styleUrl: './just-release.component.scss'
})
export class JustReleaseComponent {

	movies = nowPlayingMovies;

}

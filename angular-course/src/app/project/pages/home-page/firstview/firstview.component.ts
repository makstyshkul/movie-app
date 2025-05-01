import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { popularMovies } from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SafePipe } from '../../../pipes/safe-pipe.pipe';

@Component({
  selector: 'app-firstview',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    SafePipe
  ],
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.scss']
})
export class FirstviewComponent {
  movies = popularMovies;

  selectedVideoUrl: string | null = null;
  displayTrailer: boolean = false;

  openTrailer(videoUrl: string) {
    this.selectedVideoUrl = videoUrl;
    this.displayTrailer = true;
  }

  closeTrailer() {
    this.displayTrailer = false;
    this.selectedVideoUrl = null;
  }
}

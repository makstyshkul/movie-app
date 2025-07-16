import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatDatePipe } from "../../pipes/format-date/format-date.pipe";
import { FormatRatingPipe } from "../../pipes/format-rating/format-rating.pipe";
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
 @Output() remove = new EventEmitter<number>();
}

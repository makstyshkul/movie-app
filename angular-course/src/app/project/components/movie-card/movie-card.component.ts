import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatDatePipe } from "../../pipes/format-date/format-date.pipe";
import { FormatRatingPipe } from "../../pipes/format-rating/format-rating.pipe";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [FormatDatePipe, FormatRatingPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

	@Input() data: any;
	@Output() addFavorites = new EventEmitter<any>;
	@Output() addWatchList = new EventEmitter<any>;

	addToFavorites(): void{
		this.addFavorites.emit(this.data);
	}

	addToWatchList(): void{
		this.addWatchList.emit(this.data);
	}

}

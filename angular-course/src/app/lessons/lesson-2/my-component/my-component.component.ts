import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})

export class MyComponentComponent implements OnInit{

	@Input() data: any;
	@Output() addFavorites = new EventEmitter<any>();
	@Output() addWatchList = new EventEmitter<any>();

	public hello = 'hello!';
	public movie : any;

	ngOnInit() : void {
		this.movie = this.data;
	}

	addToFavorites() : void {
		this.addFavorites.emit(this.movie.title);
		console.log('addToFavorites');
	}

	addToWatchList() : void {
		this.addWatchList.emit(this.movie.title);
		console.log('addToWatchList');
	}
}

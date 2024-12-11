import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

	movie ={
		backdrop_path: "../assets/img/planet-apes.jpg",
		id: 653346,
		overwiew: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
		release_date: "May 5, 2024",
		title: "Kingdom of the planet of the Apes",
		rating: 8.5
	}

	handleAddToFavorites(title: string): void {
		console.log(title);
	}

	handleWatchToList(title: string): void {
		console.log(title);
	}



  constructor(){
	console.log('constructor'); 
}

ngOnChanges(): void {
	console.log('ngOnChanges'); 
}

ngOnInit(): void {
	console.log('ngOnInit'); 
}

ngDoCheck(): void {
	console.log('ngDoCheck'); 
}

ngAfterContentInit(): void {
	console.log('ngAfterContentInit'); 
}

ngAfterContentChecked(): void {
	console.log('ngAfterContentChecked'); 
}

ngAfterViewInit(): void {
	console.log('ngAfterViewInit'); 
}

ngAfterViewChecked(): void {
	console.log('ngAfterViewChecked'); 
}

ngOnDestroy(): void {
	console.log('ngOnDestroy'); 
}
}

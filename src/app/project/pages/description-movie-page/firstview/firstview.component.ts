import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { popularMovies } from '../../../../../assets/data/mock-data';

@Component({
  selector: 'app-firstview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firstview.component.html',
  styleUrl: './firstview.component.scss'
})
export class FirstviewComponent {

		movies = popularMovies;
	

}

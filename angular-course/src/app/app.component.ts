import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionMoviePageComponent } from "./project/pages/description-movie-page/description-movie-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DescriptionMoviePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{

	@Input() data: any;

}

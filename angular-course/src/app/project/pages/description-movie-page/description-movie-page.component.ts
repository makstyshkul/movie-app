import { Component } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { FirstviewComponent } from "./firstview/firstview.component";

@Component({
  selector: 'app-description-movie-page',
  standalone: true,
  imports: [IsLoggedHeaderComponent, FirstviewComponent],
  templateUrl: './description-movie-page.component.html',
  styleUrl: './description-movie-page.component.scss'
})

export class DescriptionMoviePageComponent {

}

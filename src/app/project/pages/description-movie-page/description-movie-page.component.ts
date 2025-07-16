import { Component } from '@angular/core';
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FirstviewComponent } from "./firstview/firstview.component";

@Component({
  selector: 'app-description-movie-page',
  standalone: true,
  imports: [IsUnLoggedHeaderComponent, FirstviewComponent],
  templateUrl: './description-movie-page.component.html',
  styleUrl: './description-movie-page.component.scss'
})

export class DescriptionMoviePageComponent {

}

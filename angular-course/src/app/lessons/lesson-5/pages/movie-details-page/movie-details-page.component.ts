import { Component } from '@angular/core';
import { AngularMaterialComponent } from "../../../lesson-4/angular-material/angular-material.component";

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [AngularMaterialComponent],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss'
})
export class MovieDetailsPageComponent {

}

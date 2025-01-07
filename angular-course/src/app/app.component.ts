import {Component} from '@angular/core';
import { MovieListComponent } from './project/components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './lessons/lesson-4/angular-material/angular-material.component';
import { PrimeNgComponent } from './lessons/lesson-4/prime-ng/prime-ng.component';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { MovieListPageComponent } from './lessons/lesson-5/pages/movie-list-page/movie-list-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

}

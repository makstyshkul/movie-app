import {Component} from '@angular/core';
import { MovieListComponent } from './project/components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './lessons/lesson-4/angular-material/angular-material.component';
import { PrimeNgComponent } from './lessons/lesson-4/prime-ng/prime-ng.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MovieListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

}

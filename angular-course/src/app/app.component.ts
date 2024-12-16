import {Component} from '@angular/core';
import { MovieListComponent } from './project/components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

}

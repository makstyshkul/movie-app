import { Routes } from '@angular/router';
import { MovieListPageComponent } from './lessons/lesson-5/pages/movie-list-page/movie-list-page.component';
import { MovieDetailsPageComponent } from './lessons/lesson-5/pages/movie-details-page/movie-details-page.component';
import { MovieGuard } from './lessons/lesson-5/guards/movie.guard';
import { MovieResolver } from './lessons/lesson-5/guards/movie.resolver';

export const routes: Routes = [
	{path: 'movie-list', component: MovieListPageComponent},
	{path: 'movie/:id', canActivate: [MovieGuard], resolve: {data: MovieResolver}, component: MovieDetailsPageComponent}

];

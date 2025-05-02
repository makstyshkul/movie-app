import { Routes } from '@angular/router';
import { MovieListPageComponent } from './lessons/lesson-5/pages/movie-list-page/movie-list-page.component';
import { MovieDetailsPageComponent } from './lessons/lesson-5/pages/movie-details-page/movie-details-page.component';
import { MovieGuard } from './lessons/lesson-5/guards/movie.guard';
import { MovieResolver } from './lessons/lesson-5/guards/movie.resolver';
import { IsLoggedHeaderComponent } from './project/components/header/is-logged-header/is-logged-header.component';
import { CommunityPageComponent } from './project/pages/community-page/community-page.component';
import { HomePageComponent } from './project/pages/home-page/home-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent },
	{ path: 'community', component: CommunityPageComponent },

];

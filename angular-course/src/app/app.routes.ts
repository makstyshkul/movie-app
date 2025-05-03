import { Routes } from '@angular/router';
import { CommunityPageComponent } from './project/pages/community-page/community-page.component';
import { HomePageComponent } from './project/pages/home-page/home-page.component';
import { MoviesPageComponent } from './project/pages/movies-page/movies-page.component';
import { ProfilePageComponent } from './project/pages/profile-page/profile-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent },
	{ path: 'community', component: CommunityPageComponent },
	{ path: 'movies', component: MoviesPageComponent },
	{ path: 'profile', component: ProfilePageComponent },
];

import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { nowPlayingMovies } from '../../../../assets/data/mock-data';
import { LoginPopupComponent } from "../../components/login-popup/login-popup.component";

@Component({
  selector: 'app-community-page',
  standalone: true,
  imports: [CommonModule, IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent, LoginPopupComponent],
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {
  subscribedMovies: Set<number> = new Set();
  movies = nowPlayingMovies;
  isLoggedIn: boolean = false;
  showLogin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  toggleSubscription(movieId: number) {
    if (this.subscribedMovies.has(movieId)) {
      this.subscribedMovies.delete(movieId); 
    } else {
      this.subscribedMovies.add(movieId); 
    }
  }

  handleSubscription(movie: { id: number; title: string }) {
    if (!this.isLoggedIn) {
      this.openLogin();
      return;
    }
    this.toggleSubscription(movie.id);
  }

  get subscriptionCount(): number {
    return this.subscribedMovies.size;
  }

  unsubscribe(movieId: number) {
    this.subscribedMovies.delete(movieId);
  }

  getSubscribedMovies(): { id: number; title: string }[] {
    return this.movies
      .filter((movie) => this.subscribedMovies.has(movie.id))
      .map((movie) => ({ id: movie.id, title: movie.title }));
  }

  openLogin() {
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }

  handleLoggedIn(data: { email: string; password: string }) {
    this.showLogin = false;
  }
}

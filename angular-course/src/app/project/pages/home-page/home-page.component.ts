import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstviewComponent } from "./firstview/firstview.component";
import { JustReleaseComponent } from "./just-release/just-release.component";
import { PopularComponent } from "./popular/popular.component";
import { FeaturedComponent } from "./featured/featured.component";
import { MoviesComponent } from "./movies/movies.component";
import { SeriesComponent } from "./series/series.component";
import { MoviesAwardsComponent } from "./movies-awards/movies-awards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { IsUnLoggedComponent } from "../../components/header/isLogged/isLogHead.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FirstviewComponent, JustReleaseComponent, PopularComponent, FeaturedComponent, MoviesComponent, SeriesComponent, MoviesAwardsComponent, FooterComponent, IsUnLoggedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {


}

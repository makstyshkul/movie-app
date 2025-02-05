import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FirstviewComponent } from "./firstview/firstview.component";
import { JustReleaseComponent } from "./just-release/just-release.component";
import { PopularComponent } from "./popular/popular.component";
import { FeaturedComponent } from "./featured/featured.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FirstviewComponent, JustReleaseComponent, PopularComponent, FeaturedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {


}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {popularMovies} from '../../../../assets/data/mock-data';
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

	movies = popularMovies;

}

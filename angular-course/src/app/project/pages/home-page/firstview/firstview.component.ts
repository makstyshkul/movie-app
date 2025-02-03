import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {popularMovies} from '../../../../../assets/data/mock-data';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-firstview',
  standalone: true,
  imports: [ CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './firstview.component.html',
  styleUrl: './firstview.component.scss'
})


export class FirstviewComponent {

	movies = popularMovies;


}

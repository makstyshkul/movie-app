import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./project/pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{

	@Input() data: any;

}

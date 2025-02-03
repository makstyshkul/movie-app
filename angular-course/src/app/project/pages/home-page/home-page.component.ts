import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FirstviewComponent } from "./firstview/firstview.component";
import { JustReleaseComponent } from "./just-release/just-release.component";



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FirstviewComponent, JustReleaseComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

}

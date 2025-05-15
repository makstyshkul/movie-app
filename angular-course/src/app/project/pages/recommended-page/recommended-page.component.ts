import { Component, OnInit } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recommended-page',
  standalone: true,
  imports: [IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent, CommonModule],
  templateUrl: './recommended-page.component.html',
  styleUrls: ['./recommended-page.component.scss']
})
export class RecommendedPageComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor( private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedIn$.pipe(take(1)).subscribe((status) => {
      this.isLoggedIn = status;
    });

  }
}

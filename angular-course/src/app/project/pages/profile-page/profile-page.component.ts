import { Component } from '@angular/core';
import { IsLoggedHeaderComponent } from "../../components/header/is-logged-header/is-logged-header.component";
import { IsUnLoggedHeaderComponent } from "../../components/header/is-un-logged-header/is-un-logged-header.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, IsLoggedHeaderComponent, IsUnLoggedHeaderComponent, FooterComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

	isLoggedIn: boolean = false;


	user = {
		name: 'Username',
		group: 'Kinomane',
		rating: 0,
		comments: 0,
		registered: new Date('2022-09-04T18:42:00'),
		signature: '',
		about: '',
		avatarUrl: '../../../../assets/img/header/avatar.png',
	 };
	 
	 watchlist = ["ddd"]; 
	 favorite = ["aaa"]; 
	 watched = ["fff"];
	 
	 activeTab = 'watchlist';

	   constructor(private authService: AuthService ) {}
	 
	 setTab(tab: 'watchlist' | 'watched' | 'favorite') {
		this.activeTab = tab;
	 }

	 ngOnInit() {
		this.authService.loggedIn$.subscribe((status) => {
		  this.isLoggedIn = status;
		});
}



}

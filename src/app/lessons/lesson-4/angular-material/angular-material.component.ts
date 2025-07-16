import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';

export interface Section {
	name: string;
	updated: Date;
 }

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatDividerModule, DatePipe],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.scss'
})
export class AngularMaterialComponent {
	folders: Section[] = [
		{
		  name: 'Photos',
		  updated: new Date('1/1/16'),
		},
		{
		  name: 'Recipes',
		  updated: new Date('1/17/16'),
		},
		{
		  name: 'Work',
		  updated: new Date('1/28/16'),
		},
	 ];
	 notes: Section[] = [
		{
		  name: 'Vacation Itinerary',
		  updated: new Date('2/20/16'),
		},
		{
		  name: 'Kitchen Remodel',
		  updated: new Date('1/18/16'),
		},
	 ];
}

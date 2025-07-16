import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MaxLengthDirective} from '../directives/app-max-length.directive';
import { NumberFormatPipe } from "../pipes/number-format.pipe";

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, MaxLengthDirective, NumberFormatPipe],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
	public isUserLoggedIn = true;
	public userName = 'John';
	public viewMode = 'map';

	public items = [
		{ id: 1, name: 'Element 1'},
		{ id: 2, name: 'Element 2'},
		{ id: 3, name: 'Element 3'},
		{ id: 4, name: 'Element 4'},
	]

	trackById(index: number, item: any): number {
		return item.id;
	}
}

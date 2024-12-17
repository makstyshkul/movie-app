import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [ButtonModule, CardModule, AccordionModule],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.scss'
})
export class PrimeNgComponent {
	activeIndex: number | undefined = 0;

	activeIndexChange(index : number){
		 this.activeIndex = index
	}
}

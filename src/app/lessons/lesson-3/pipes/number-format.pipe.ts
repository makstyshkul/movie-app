import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
  pure: true
})
export class NumberFormatPipe implements PipeTransform {

	transform(value: number): string {
		if(value == null){
			return '';
		}
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}

}

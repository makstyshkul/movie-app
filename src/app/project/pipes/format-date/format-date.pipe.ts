import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
  pure: true
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): string {
	const date = new Date(value)
    return date.toLocaleDateString();
  }

}

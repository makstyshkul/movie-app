import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRating',
  standalone: true,
  pure: true
})
export class FormatRatingPipe implements PipeTransform {

  transform(value: number): number {
    return Number(value.toFixed(1));
  }

}

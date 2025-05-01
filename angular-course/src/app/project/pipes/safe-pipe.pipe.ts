import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    const embedUrl = url.includes('watch?v=')
      ? url.replace('watch?v=', 'embed/')
      : url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}

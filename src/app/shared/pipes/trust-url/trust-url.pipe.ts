import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'trustUrl'
})
export class TrustUrlPipe implements PipeTransform {
  #sanitizer = inject(DomSanitizer);

  transform(content: string | undefined): SafeResourceUrl {
    if (!content) return '';
    return this.#sanitizer.bypassSecurityTrustResourceUrl(content);
  }
}

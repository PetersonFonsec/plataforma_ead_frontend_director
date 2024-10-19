import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml',
  standalone: true
})
export class TrustHtmlPipe implements PipeTransform {
  #sanitizer = inject(DomSanitizer);

  transform(content: string): unknown {
    return this.#sanitizer.bypassSecurityTrustHtml(content);
  }
}

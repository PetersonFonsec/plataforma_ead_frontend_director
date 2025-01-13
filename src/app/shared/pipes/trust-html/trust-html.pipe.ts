import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml',
  standalone: true
})
export class TrustHtmlPipe implements PipeTransform {
  #sanitizer = inject(DomSanitizer);

  transform(content: string): SafeHtml {
    return this.#sanitizer.bypassSecurityTrustHtml(content);
  }
}

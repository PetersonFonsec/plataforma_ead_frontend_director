import { AfterViewChecked, Component, ElementRef, inject, input, viewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TrustUrlPipe } from '@shared/pipes/trust-url/trust-url.pipe';
import Plyr from 'plyr';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [TrustUrlPipe]
})
export class VideoPlayerComponent implements AfterViewChecked {
  readonly target = viewChild.required<ElementRef>('target');
  sanitizer = inject(DomSanitizer);
  elementRef = inject(ElementRef);

  options = input<any>({
    require: true, Transform: (value: any) => {
      if (value.src) value.src = this.sanitizer.bypassSecurityTrustUrl(value.src)
      return value
    }
  });

  ngAfterViewChecked(): void {
    if (this.target()) new Plyr(this.target().nativeElement);
  }
}

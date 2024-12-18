import { Component, ElementRef, inject, input, Input, OnDestroy, OnInit, viewChild, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

interface PlayerVideo {
  fluid: boolean,
  aspectRatio: string,
  autoplay: boolean,
  sources: {
    src: string,
    type: string,
  }[],
}

@Component({
  selector: 'app-video-player',
  imports: [],
  template: `
    <video #target class="video-js vjs-theme-city" controls muted playsinline preload="none"></video>
  `,
  styleUrl: './video-player.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  readonly target = viewChild.required<ElementRef>('target');
  elementRef = inject(ElementRef);
  options = input<PlayerVideo>();
  player!: Player;

  ngOnInit() {
    console.log(this.options())
    console.log(this.target().nativeElement)
    this.player = videojs(this.target().nativeElement, this.options(), function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    if (this.player) this.player.dispose();

  }
}

import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    imports: [NgStyle],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  readonly progress = input("", { transform: (value: number /*T:VAE*/) => `${value} %` });
}

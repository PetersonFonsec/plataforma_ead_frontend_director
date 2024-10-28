import { NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input({ transform: (value: number) => `${value} %` }) progress = "";
}

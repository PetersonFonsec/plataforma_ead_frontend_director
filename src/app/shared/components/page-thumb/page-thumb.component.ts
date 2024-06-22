import { Component, Input } from '@angular/core';
import { IPageThumbParams } from './page-thumb.interface';

@Component({
  selector: 'app-page-thumb',
  standalone: true,
  imports: [],
  templateUrl: './page-thumb.component.html',
  styleUrl: './page-thumb.component.scss'
})
export class PageThumbComponent {
  @Input({ required: true }) college!: IPageThumbParams;
  defaultColor = "linear-gradient(#888, #000)";
}

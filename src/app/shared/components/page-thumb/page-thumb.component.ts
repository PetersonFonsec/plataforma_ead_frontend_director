import { Component, input } from '@angular/core';
import { IPageThumbParams } from './page-thumb.interface';

@Component({
    selector: 'app-page-thumb',
    imports: [],
    templateUrl: './page-thumb.component.html',
    styleUrl: './page-thumb.component.scss'
})
export class PageThumbComponent {
  readonly college = input.required<IPageThumbParams>();
  defaultColor = "linear-gradient(#888, #000)";
}

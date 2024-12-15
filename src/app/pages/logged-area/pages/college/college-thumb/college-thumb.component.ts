import { Component, input } from '@angular/core';
import { CollegeForm } from '../model/college.model';

@Component({
    selector: 'app-college-thumb',
    imports: [],
    templateUrl: './college-thumb.component.html',
    styleUrl: './college-thumb.component.scss'
})
export class CollegeThumbComponent {
  readonly college = input(new CollegeForm());
}

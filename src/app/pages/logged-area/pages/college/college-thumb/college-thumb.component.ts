import { Component, Input } from '@angular/core';
import { CollegeForm } from '../model/college.model';

@Component({
  selector: 'app-college-thumb',
  standalone: true,
  imports: [],
  templateUrl: './college-thumb.component.html',
  styleUrl: './college-thumb.component.scss'
})
export class CollegeThumbComponent {
  @Input() college = new CollegeForm();
}

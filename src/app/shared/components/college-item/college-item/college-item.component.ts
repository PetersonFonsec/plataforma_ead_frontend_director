import { Component, Input } from '@angular/core';
import { College } from '../../../services/college/collage.model';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-college-item',
    imports: [NgStyle],
    templateUrl: './college-item.component.html',
    styleUrl: './college-item.component.scss'
})
export class CollegeItemComponent {
  @Input() college!: College;
}

import { Component } from '@angular/core';
import { LoggedPageComponent } from '../../shared/components/logged-page/logged-page.component';

@Component({
  selector: 'app-logged-area',
  standalone: true,
  imports: [LoggedPageComponent],
  templateUrl: './logged-area.component.html',
  styleUrl: './logged-area.component.scss'
})
export class LoggedAreaComponent { }

import { Component } from '@angular/core';
import { JumbotronComponent } from '../../../../shared/components/jumbotron/jumbotron.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'jumbotron-profile',
  standalone: true,
  imports: [JumbotronComponent, ButtonComponent],
  templateUrl: './jumbotron-profile.component.html',
  styleUrl: './jumbotron-profile.component.scss'
})
export class JumbotronProfileComponent {

}

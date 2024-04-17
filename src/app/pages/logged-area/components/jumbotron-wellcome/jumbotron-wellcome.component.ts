import { Component } from '@angular/core';
import { JumbotronComponent } from '../../../../shared/components/jumbotron/jumbotron.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-jumbotron-wellcome',
  standalone: true,
  imports: [JumbotronComponent, ButtonComponent],
  templateUrl: './jumbotron-wellcome.component.html',
  styleUrl: './jumbotron-wellcome.component.scss'
})
export class JumbotronWellcomeComponent {

}

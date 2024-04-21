import { Component } from '@angular/core';
import { JumbotronComponent } from '../../../../shared/components/jumbotron/jumbotron.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jumbotron-wellcome',
  standalone: true,
  imports: [JumbotronComponent, ButtonComponent, RouterLink],
  templateUrl: './jumbotron-wellcome.component.html',
  styleUrl: './jumbotron-wellcome.component.scss'
})
export class JumbotronWellcomeComponent {

}

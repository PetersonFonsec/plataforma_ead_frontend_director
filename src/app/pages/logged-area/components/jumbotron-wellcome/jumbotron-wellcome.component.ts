import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { JumbotronComponent } from '@shared/components/jumbotron/jumbotron.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
    selector: 'jumbotron-wellcome',
    imports: [JumbotronComponent, ButtonComponent, RouterLink],
    templateUrl: './jumbotron-wellcome.component.html',
    styleUrl: './jumbotron-wellcome.component.scss'
})
export class JumbotronWellcomeComponent {

}

import { Component } from '@angular/core';
import { JumbotronComponent } from '../../../../shared/components/jumbotron/jumbotron.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'jumbotron-profile',
    imports: [JumbotronComponent, ButtonComponent, RouterLink],
    templateUrl: './jumbotron-profile.component.html',
    styleUrl: './jumbotron-profile.component.scss'
})
export class JumbotronProfileComponent {

}

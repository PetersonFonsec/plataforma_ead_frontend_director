import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-welcome',
    imports: [ButtonComponent, RouterLink],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}

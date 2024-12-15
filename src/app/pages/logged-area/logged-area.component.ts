import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoggedPageComponent } from '../../shared/components/logged-page/logged-page.component';
import { fadeAnimation } from '../../shared/animations/fade/fade.animation';

@Component({
    selector: 'app-logged-area',
    imports: [LoggedPageComponent, RouterOutlet],
    templateUrl: './logged-area.component.html',
    styleUrl: './logged-area.component.scss',
    animations: [
        fadeAnimation
    ]
})
export class LoggedAreaComponent { }

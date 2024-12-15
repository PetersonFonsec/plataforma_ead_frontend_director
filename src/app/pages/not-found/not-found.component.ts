import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
    selector: 'app-not-found',
    imports: [
        RouterOutlet,
        NgOptimizedImage,
        ButtonComponent,
        RouterLink
    ],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}

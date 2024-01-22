import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthComponent, NotFoundComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'director';
}

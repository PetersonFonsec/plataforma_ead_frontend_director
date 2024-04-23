import { Component, OnInit, inject } from '@angular/core';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AlertComponent, AlertTypes } from '../../../../shared/components/alert/alert.component';
import { AvatarComponent, AvatarSizeParam } from '../../../../shared/components/avatar/avatar.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile/profile.service';
import { UserLoggedService } from '../../../../shared/services/user-logged/user-logged.service';
import { HttpErrorResponse } from '@angular/common/http';
import { fadeAnimation } from '../../../../shared/animations/fade/fade.animation';
import { RouterLink } from '@angular/router';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    InputTextComponent,
    ButtonComponent,
    AlertComponent,
    AvatarComponent,
    FormsModule,
    RouterLink,
    ButtonBackComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  animations: [fadeAnimation]
})
export class ProfileComponent implements OnInit {
  #userService = inject(UserLoggedService);
  #profileService = inject(ProfileService);
  alertType = AlertTypes.success;
  avatarSize = AvatarSizeParam.large;
  alertMessage = ""
  payload = {
    documentNumber: "",
    celphone: "",
    email: "",
    avatar: "",
    name: "",
    id: ""
  };

  ngOnInit(): void {
    const user = this.#userService.user();

    if (!user) return;

    this.payload.email = user.email;
    this.payload.name = user.name;
  }

  submit() {
    const user = this.#userService.user()
    this.payload.id = user.id;

    this.#profileService.updateProfile(this.payload).subscribe({
      next: () => {
        this.alertType = AlertTypes.success;
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}

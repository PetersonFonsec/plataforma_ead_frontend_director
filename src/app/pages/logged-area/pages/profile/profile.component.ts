import { Component, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { AvatarComponent, AvatarSizeParam } from '@shared/components/avatar/avatar.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';

import { ProfileService } from './services/profile/profile.service';
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
    ButtonBackComponent,
    InputUploadComponent
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
    //TODO adicionar ao banco de dados o campo telefone
    // celphone: "",
    email: "",
    photo: "",
    name: "",
  } as any;

  ngOnInit(): void {
    const loggedUser = this.#userService.user();
    if (!loggedUser) return;

    const user = loggedUser.user;

    this.payload.photo = user.photo;
    this.payload.email = user.email;
    this.payload.name = user.name;
  }

  submit() {
    const payload = JSON.parse(JSON.stringify(this.payload));
    if (payload.photo) payload.photo = payload.photo.file;

    this.#profileService.updateProfile(payload).subscribe({
      next: (updatedUser) => {
        this.alertType = AlertTypes.success;
        this.#userService.updatetUser(updatedUser);
        this.payload.photo = updatedUser.photo;
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}

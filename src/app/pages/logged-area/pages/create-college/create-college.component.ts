import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputUploadComponent } from '@shared/components/input-upload/input-upload.component';
import { InputColorComponent } from '@shared/components/input-color/input-color.component';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { AlertComponent, AlertTypes } from '@shared/components/alert/alert.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CollegeService } from '@shared/services/college/college.service';
import { CollegeRequest } from '@shared/services/college/collage.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-college',
  standalone: true,
  imports: [
    InputColorComponent,
    InputTextComponent,
    InputUploadComponent,
    ButtonComponent,
    FormsModule,
    ButtonBackComponent,
    AlertComponent,
    RouterLink
  ],
  templateUrl: './create-college.component.html',
  styleUrl: './create-college.component.scss'
})
export class CreateCollegeComponent {
  #collegeService = inject(CollegeService);
  #router = inject(Router);
  alertType = AlertTypes.success;
  alertMessage = "";
  payload: CollegeRequest = {
    secundaryColor: "",
    primaryColor: "",
    thumb: "",
    name: "",
  }

  submit() {
    this.payload.thumb = this.payload?.thumb?.file ?? '';
    this.#collegeService.createCollege(this.payload).subscribe({
      next: async (college) => {
        await this.#router.navigateByUrl(`/area-logada/college/${college.id}`);
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}

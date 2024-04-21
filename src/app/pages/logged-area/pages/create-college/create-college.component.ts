import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputUploadComponent } from '../../../../shared/components/input-upload/input-upload.component';
import { InputColorComponent } from '../../../../shared/components/input-color/input-color.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CollegeService } from '../../../../shared/services/college/college.service';
import { CollegeRequest } from '../../../../shared/services/college/collage.model';
import { AlertComponent, AlertTypes } from '../../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-create-college',
  standalone: true,
  imports: [
    InputColorComponent,
    InputTextComponent,
    InputUploadComponent,
    ButtonComponent,
    FormsModule,
    AlertComponent
  ],
  templateUrl: './create-college.component.html',
  styleUrl: './create-college.component.scss'
})
export class CreateCollegeComponent {
  #collegeService = inject(CollegeService);
  alertType = AlertTypes.success;
  alertMessage = "";
  payload: CollegeRequest = {
    secundaryColor: "",
    primaryColor: "",
    thumb: "",
    name: "",
  }

  submit() {
    this.#collegeService.createCollege(this.payload).subscribe({
      next: () => {
        this.alertType = AlertTypes.success;
        this.alertMessage = "Instituição criada com sucesso";
      },
      error: (error: HttpErrorResponse) => {
        this.alertType = AlertTypes.error;
        this.alertMessage = error.error.message;
      }
    });
  }
}

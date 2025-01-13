import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '@shared/animations/fade/fade.animation';
import { PayloadRequest } from '@shared/services/encript/payload.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [
    fadeAnimation
  ]
})
export class AuthComponent implements OnInit {
  logo = "";

  async ngOnInit(): Promise<void> {
    const payload = new PayloadRequest();

    payload.confirmPassword = "123";
    payload.documentNumber = "123";
    payload.documentType = 13;
    payload.password = "123";

    const payloadFormated = await (payload as any).encript();

    console.log(payloadFormated);
  }
}

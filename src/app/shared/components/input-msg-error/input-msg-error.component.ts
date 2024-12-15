import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MESSAGES_ERRO } from '@shared/data/messages-erros';

@Component({
  selector: 'app-input-msg-error',
  standalone: true,
  imports: [],
  templateUrl: './input-msg-error.component.html',
  styleUrl: './input-msg-error.component.scss'
})
export class InputMsgErrorComponent implements OnInit {
  @Input({ required: true }) controler!: NgModel;
  @Input() describeBy = "";
  errorMsg = "";

  ngOnInit() {
    if (!this.controler.errors) return;

    const errors = Object.keys(this.controler.errors);
    const firstError = errors[0];

    if (firstError) {
      this.errorMsg = MESSAGES_ERRO[firstError];

      console.log(this.errorMsg);
    }
  }
}

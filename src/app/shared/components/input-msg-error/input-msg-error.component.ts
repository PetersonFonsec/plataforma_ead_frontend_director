import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MESSAGES_ERRO } from '@shared/data/messages-erros';

@Component({
    selector: 'app-input-msg-error',
    imports: [],
    templateUrl: './input-msg-error.component.html',
    styleUrl: './input-msg-error.component.scss'
})
export class InputMsgErrorComponent implements OnInit {
  readonly controler = input.required<NgModel>();
  readonly describeBy = input("");
  errorMsg = "";

  ngOnInit() {
    const controler = this.controler();
    if (!controler.errors) return;

    const errors = Object.keys(controler.errors);
    const firstError = errors[0];

    if (firstError) {
      this.errorMsg = MESSAGES_ERRO[firstError];

      console.log(this.errorMsg);
    }
  }
}

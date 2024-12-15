import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export enum AlertTypes {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info"
}

@Component({
    selector: 'alert',
    imports: [FontAwesomeModule, NgClass],
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() type: AlertTypes = AlertTypes.error;
  @Input() hideShadow = false;

  get icon() {
    return this.type != AlertTypes.success ? faInfoCircle : faCheckCircle
  };
}

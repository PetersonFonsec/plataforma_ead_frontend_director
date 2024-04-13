import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export enum AlertTypes {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info"
}

@Component({
  selector: 'alert',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() type: AlertTypes = AlertTypes.error

  get icon() {
    return this.type != AlertTypes.success ? faCircleInfo : faCircleCheck
  };
}

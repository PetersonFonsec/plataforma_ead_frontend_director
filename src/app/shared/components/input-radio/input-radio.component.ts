import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
    },
  ],
})
export class InputRadioComponent {
  @Input() name = ""
  @Input() id = ""

}

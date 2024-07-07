import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { InputRadioComponent } from "../input-radio/input-radio.component";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [InputRadioComponent, FormsModule
  ],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCardComponent),
    },
  ],
})
export class InputCardComponent implements OnInit, ControlValueAccessor {
  @Input({ transform: (value: string) => `${value}-input` }) id = "";
  @Input() valor = "";
  @Input() name = "";
  val = '';

  get value() {
    return this.val;
  }

  set value(val: any) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  ngOnInit(): void { }

  onChange: any = () => { };

  onTouched: any = () => { };

  onBlur() { }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

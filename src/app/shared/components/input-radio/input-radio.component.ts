import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input-radio',
    imports: [FormsModule],
    templateUrl: './input-radio.component.html',
    styleUrl: './input-radio.component.scss',
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputRadioComponent),
        },
    ]
})
export class InputRadioComponent implements OnInit, ControlValueAccessor {
  @Input() value = "";
  @Input() name = "";
  @Input() id = "";
  val = '';

  get _value() {
    return this.val;
  }

  set _value(val: any) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  toggle(event: any) {
    this._value = event
  }

  ngOnInit(): void { }

  onChange: any = () => { };

  onTouched: any = () => { };

  onBlur() { }

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

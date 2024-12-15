import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputTextComponent } from '../input-text/input-text.component';

export interface ISelectOptions {
  value: string;
  label: string;
}

@Component({
    selector: 'app-select',
    imports: [CommonModule, FormsModule, InputTextComponent],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
        },
    ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  readonly placeholder = input('');
  readonly error = input(false);
  readonly label = input('');
  readonly id = input('');
  readonly options = input<ISelectOptions[] | null>([]);
  _options: ISelectOptions[] | null = [];
  inputValue = '';
  showOptions = false;
  val = '';

  onChange: any = () => { };

  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this._options = this.options();
  }

  setValue(product: any) {
    this.showOptions = false;

    this.inputValue = product.label;
    this.value = product.value;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  filterOptions(): ISelectOptions[] {
    const options = this.options();
    if (!options) return [];
    this._options = options.filter(({ label }) => label.includes(this.inputValue));
    return this._options;
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputTextComponent } from '../input-text/input-text.component';
import { SelectOptionsFilterPipe } from '../../pipes/select-options-filter/select-options-filter.pipe';

export interface ISelectOptions {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  viewProviders: [SelectOptionsFilterPipe],
  imports: [CommonModule, FormsModule, InputTextComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';
  @Input() error = false;
  @Input() label = '';
  @Input() id = '';
  @Input() options: ISelectOptions[] | null = [];
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
    this._options = this.options;
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
    if (!this.options) return [];
    this._options = this.options.filter(({ label }) => label.includes(this.inputValue));
    return this._options;
  }

}

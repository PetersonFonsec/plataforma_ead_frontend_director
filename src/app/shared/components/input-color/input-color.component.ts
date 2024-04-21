import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-input-color',
  standalone: true,
  imports: [FormsModule, NgStyle, CommonModule],
  templateUrl: './input-color.component.html',
  styleUrl: './input-color.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputColorComponent),
    },
  ],
})
export class InputColorComponent implements OnInit, ControlValueAccessor {
  @Input() error = false;
  @Input() label = '';
  @Input() id = '';
  val = '';

  ngOnInit(): void { }

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

  onBlur() { }

  /**
   * @description Essa função foi criada para atender ha uma
   * necessidade do cypress pois no cypress quando disparamos
   * uma função com trigger não esta atualizando o ngModel do angular.
   *
   * Fica como TODO como fazer isso de uma forma menos gambiarra
   */
  getColorToValProperty(color: any) {
    console.log(color)
    this.value = color;
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

}

import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, forwardRef, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

export enum InputTextTypes {
  password = "password",
  text = "text"
}

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule, NgClass, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
    },
    provideNgxMask()
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() success = false;
  @Input() error = false;
  @Input() label = '';
  @Input({ transform: (value: string) => `${value}-input` }) id = "";
  @Input() type = "text";
  @Input() mask = "";
  @Input() autofocus = false;
  val = '';

  @ViewChild("inputHTML") inputHTML!: ElementRef;

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

  ngAfterViewInit() {
    if (!this.autofocus) return;

    console.log(this.inputHTML.nativeElement)
    this.inputHTML.nativeElement.focus();
  }


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

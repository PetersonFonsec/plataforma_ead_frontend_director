import { CommonModule, NgIf } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

export interface InputPhotoValue {
  b64: string;
  file: any;
}
@Component({
  selector: 'input-upload',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './input-upload.component.html',
  styleUrl: './input-upload.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputUploadComponent),
    },
  ],
})
export class InputUploadComponent implements OnInit, ControlValueAccessor {
  @Input({ transform: (value: string) => `${value}-input-upload` }) id = "";
  @Input() initialImage?: string = '';
  @Input() disabled = false;
  @Input() accept = 'image/png, image/jpeg';
  icon = faCloudUploadAlt
  val: InputPhotoValue = {
    b64: '',
    file: '',
  };

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

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  showImage(event: any): void {
    const files: FileList = event.target.files;
    const reader = new FileReader();

    reader.onload = () => {
      this.value = {
        b64: reader.result as string,
        file: files[0],
      };
    };

    reader.readAsDataURL(files[0]);
  }
}

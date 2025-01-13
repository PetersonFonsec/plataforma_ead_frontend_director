import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMask]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaskDirective,
      multi: true
    }
  ]
})
export class MaskDirective {
  @Input('mask') mask!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string): void {
    if (this.mask) {
      const alphanumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
      const maskedValue = this.applyMask(alphanumericValue, this.mask);
      this.renderer.setProperty(this.el.nativeElement, 'value', maskedValue);
    }
  }

  private applyMask(value: string, mask: string): string {
    let maskedValue = '';
    let valueIndex = 0;

    for (const char of mask) {
      if (valueIndex >= value.length) break;

      if (char === 'X') {
        // Apenas números
        while (value[valueIndex] && !/[0-9]/.test(value[valueIndex])) {
          valueIndex++; // Avança até encontrar um número
        }
        maskedValue += value[valueIndex] || '';
        valueIndex++;
      } else if (char === 'A') {
        // Letras ou números
        while (value[valueIndex] && !/[a-zA-Z0-9]/.test(value[valueIndex])) {
          valueIndex++; // Avança até encontrar um caractere válido
        }
        maskedValue += value[valueIndex] || '';
        valueIndex++;
      } else {
        // Caracteres fixos na máscara
        maskedValue += char;
      }
    }

    return maskedValue;
  }
}

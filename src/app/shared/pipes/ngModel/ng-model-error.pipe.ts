
import { Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';

@Pipe({
  name: 'ngModelError',
  standalone: true,
  pure: false
})
export class NgModelErrorPipe implements PipeTransform {

  transform(controler: NgModel): boolean {
    const { errors, dirty, pristine } = controler;

    if (!errors) return false;

    return !!(Object.keys(errors).length && !pristine)
  }

}

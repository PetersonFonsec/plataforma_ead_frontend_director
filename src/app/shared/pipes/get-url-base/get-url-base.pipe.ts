import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUrlBase'
})
export class GetUrlBasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

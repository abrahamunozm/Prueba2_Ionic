import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proveedor1'
})
export class Proveedor1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

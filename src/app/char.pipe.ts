import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'char'
})
export class CharPipe implements PipeTransform {

  transform(property: string, ...args: number[]): string {

    let [index] = args;
    let len = property.length;
    if (index < len) {
      let char = property.charAt(index);
      return char;
    } else {
      return "index out of range";
    }
  }

}

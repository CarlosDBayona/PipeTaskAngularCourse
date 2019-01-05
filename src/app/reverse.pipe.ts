import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let reversedSting = '';
    for ( let character of value) {
      reversedSting = character + reversedSting;
    } 
    return reversedSting;
  }

}

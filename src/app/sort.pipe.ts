import { Pipe, PipeTransform } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    const sortArray = [];
    const restultArray = [];
    for ( const server of value) {
      sortArray.push(server.name);
    }
    sortArray.sort();
    for (const rest of sortArray) {
      for ( const server of value) {
        if (rest === server.name) {
          restultArray.push(server);
        }
      }
    }
    console.log(restultArray);
    return restultArray;
  }

}

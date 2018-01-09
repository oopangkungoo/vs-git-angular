import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class AppPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined) {
      return 'Mr' + ' ' + value;
    }
   // tslint:disable-next-line:one-line
   else {
     return null;
   }
  }

}

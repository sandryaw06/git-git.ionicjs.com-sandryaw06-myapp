import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class placeholderPipe implements PipeTransform {
  transform(data: string, args: string): string {
    return (data) ? data :  args;
  }
}

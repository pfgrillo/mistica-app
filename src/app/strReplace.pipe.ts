import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'strReplace' })
export class strReplace implements PipeTransform {
  transform(str: string): any {
    return str.replace('"', '')
  }
}
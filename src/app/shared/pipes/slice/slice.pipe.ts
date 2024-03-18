import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {
  transform(value: string, wordCount: number): string {
    const words = value.split(' ').slice(0, wordCount);
    return words.join(' ');
  }
}

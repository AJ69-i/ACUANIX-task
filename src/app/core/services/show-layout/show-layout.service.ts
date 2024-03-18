import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowLayoutService {

  constructor() { }
  
  setValue(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): any {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }
}

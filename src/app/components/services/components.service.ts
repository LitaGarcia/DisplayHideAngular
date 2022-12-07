import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  public classMode: boolean = false;
  public hideElement: string = '';
  constructor() {}
  
  public generateClassMode() {
    this.classMode = !this.classMode
  }
  
  public getClassMode() {
    return this.classMode;
  }
}

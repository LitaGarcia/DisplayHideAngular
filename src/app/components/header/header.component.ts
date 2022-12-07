import { Component } from '@angular/core';
import { ComponentsService } from '../services/components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public classMode: boolean = false;
  constructor(private componentsService: ComponentsService) {}
  get getClassMode() {
    return this.componentsService.classMode;
  }
}

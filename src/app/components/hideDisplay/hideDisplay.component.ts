import { Component } from '@angular/core';
import { ComponentsService } from '../services/components.service';

@Component({
  selector: 'app-hideDisplay',
  templateUrl: './hideDisplaycomponent.html',
  styleUrls: ['./hideDisplay.component.scss'],
})
export class HideDisplayComponent {
  public classMode: boolean = false;
  public hideElement: string = '';
  constructor(private componentsService: ComponentsService) {}
  public generateClassMode() {
    this.componentsService.generateClassMode();
  }
  public showHideComponent() {
    if (!this.classMode) {
      this.hideElement = 'hi!:)';
    } else {
      this.hideElement = '';
    }
  }
}

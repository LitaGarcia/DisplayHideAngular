import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  public modeSelected: boolean = false;
  public mode: string = '';
  // public selectMode() {
  //   if (!this.modeSelected) {
  //     this.mode = 'Daylight mode';
  //   } else {
  //     this.mode = 'Nighlight mode';
  //   }
  // }
  public selectMode() {
    if (!this.modeSelected) {
      this.mode = 'hi!:)';
    } else {
      this.mode = '';
    }
  }
}

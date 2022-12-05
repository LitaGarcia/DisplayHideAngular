import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';

import { HeaderComponent } from './header/header.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, ToggleComponent],
  exports: [HeaderComponent, BodyComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}

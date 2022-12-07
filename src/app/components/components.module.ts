import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';

import { HeaderComponent } from './header/header.component';
import { HideDisplayComponent } from './hideDisplay/hideDisplay.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    HideDisplayComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HideDisplayComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}

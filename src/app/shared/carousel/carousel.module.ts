import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // <-- Importe NgbModule aqui




@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }

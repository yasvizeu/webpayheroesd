import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { HeaderModule } from "../shared/header/header.module";
import { CarouselModule } from "../shared/carousel/carousel.module";
import { CardsModule } from "../shared/cards/cards.module";
import { FooterModule } from "../shared/footer/footer.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CarouselModule,
    CardsModule,
    FooterModule
],
  exports: [HomeComponent]
})
export class HomeModule { }

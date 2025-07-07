
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './shared/header/header.module';
import { CardsModule } from './shared/cards/cards.module';
import { CarouselModule } from './shared/carousel/carousel.module';
import { FooterModule } from './shared/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VillainsModule } from './villains/villains.module';
import { CreateHeroModule } from './create-hero/create-hero.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateVillainModule } from './components/create-villain/create-villain.module';
import { CommonModule } from '@angular/common';
import {provideHttpClient} from '@angular/common/http'
import { ListHeroesModule } from './components/list-heroes/list-heroes.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeroesModule,
    HeaderModule,
    CardsModule,
    CarouselModule,
    FooterModule,
    CreateHeroModule,
    VillainsModule,
    NgbModule,
    ReactiveFormsModule,
    CreateVillainModule,
    CommonModule,
    FormsModule,
    ListHeroesModule

],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { VillainsComponent } from './components/villains/villains.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch:'full'},
  {path: "heroes", component: HeroesComponent, pathMatch:'full'},
  {path: "create-hero", component: CreateHeroComponent, pathMatch:'full'},
  {path: "villains", component: VillainsComponent, pathMatch:'full'},
  {path: "list-hero", component: ListHeroesComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

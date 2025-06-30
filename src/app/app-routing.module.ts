import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { VillainsComponent } from './components/villains/villains.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch:'full'},
  {path: "home", component: HomeComponent, pathMatch:'full'},
  {path: "heroes", component: HeroesComponent, pathMatch:'full'},
  {path: "create-hero", component: CreateHeroComponent, pathMatch:'full'},
  {path: "villains", component: VillainsComponent, pathMatch:'full'},
  {path: "create-villain", component: CreateVillainComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

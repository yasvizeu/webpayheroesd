import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';


const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch:'full'},
  {path: "home", component: HomeComponent, pathMatch:'full'},
  {path: "heroes", component: HeroesComponent, pathMatch:'full'},
  {path: "create-hero", component: CreateHeroComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

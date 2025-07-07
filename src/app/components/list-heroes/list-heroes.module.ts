import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list-heroes.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ListHeroesComponent]
})
export class ListHeroesModule { }

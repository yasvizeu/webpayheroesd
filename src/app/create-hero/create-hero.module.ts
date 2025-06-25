import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroComponent } from '../components/create-hero/create-hero.component';



@NgModule({
  declarations: [CreateHeroComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateHeroComponent]
})
export class CreateHeroModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroComponent } from '../components/create-hero/create-hero.component';
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CreateHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CreateHeroComponent]
})
export class CreateHeroModule { }

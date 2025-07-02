
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroComponent } from '../components/create-hero/create-hero.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CreateHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateHeroComponent]
})
export class CreateHeroModule { }

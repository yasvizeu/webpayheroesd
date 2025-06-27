import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
@Component({
  selector: 'app-create-hero',
  standalone: false,
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.scss'
})
export class CreateHeroComponent {
  hero: Hero = {
    name:'',
    age: 0,
    power: '',
    gender:''
  };

  submitHero(){
    console.log(this.hero);
  }
}

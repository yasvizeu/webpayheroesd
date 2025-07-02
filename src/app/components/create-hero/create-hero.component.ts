import { HeroesComponent } from './../heroes/heroes.component';
import { Component } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { HeroesService } from '../../services/heroes.service';
import { response } from 'express';
@Component({
  selector: 'app-create-hero',
  standalone: false,
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.scss'
})
export class CreateHeroComponent {

constructor (private heroesService: HeroesService){}

name: string = '';
age: number = 0;
power: string = '';
gender: string = '';

submitHero(){
  if (this.name==='' || this.age===0 || this.power==='' || this.gender===''){
    alert('Preencha todos os campos.');
    return;
  }

  const hero = {
    name: this.name,
    age: this.age,
    power: this.power,
    gender: this.gender
  }

  this.heroesService.createHero(hero).subscribe({
    next: (response) => {
      console.log(response);
    },

    error: (error) => {
      console.log(error)
    }
  })
  // console.log(this.name);
  // console.log(this.age);
  // console.log(this.power);
  // console.log(this.gender);
}
}

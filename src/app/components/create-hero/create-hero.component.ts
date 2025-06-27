import { Component } from '@angular/core';

@Component({
  selector: 'app-create-hero',
  standalone: false,
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.scss'
})
export class CreateHeroComponent {
  name: string = '';
  age: number = 0;
  power: string = '';
  gender : string = '';
}

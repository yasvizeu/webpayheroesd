import { Component } from '@angular/core';

@Component({
  selector: 'app-create-villain',
  standalone: false,
  templateUrl: './create-villain.component.html',
  styleUrl: './create-villain.component.scss'
})
export class CreateVillainComponent {

  name: string = '';
  age: number = 0;
  power: string = '';
  gender: string = '';

  submitVillain(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.power);
    console.log(this.gender);
  }
}


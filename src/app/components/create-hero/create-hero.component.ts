
// import { Component } from '@angular/core';
// import { HeroesService } from '../../services/heroes.service';
// import { response } from 'express';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-create-hero',
//   standalone: false,
//   templateUrl: './create-hero.component.html',
//   styleUrl: './create-hero.component.scss'
// })
// export class CreateHeroComponent {

// constructor (private heroesService: HeroesService, private fb:FormBuilder){}

// heroForm!: FormGroup;

// ngOnInit(): void{
//   this.heroForm = this.fb.group ({
//     name:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
//     age: [[0, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]],
//     power: [['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]],
//     gender: [['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]],
//   })



//   controle:(campo: string){
//     return this.heroForm.get(campo);
//   }

//   onSubmit(){
//     if (this.heroForm.invalid){
//       this.heroForm.markAllAsTouched();
//       console.error('Formulário inválido. Verifique os campos.');
//       return;
//     }
//   }

//   const hero = {
//     name: this.heroForm.get('name')?.value,
//     age: this.heroForm.get('age')?.value,
//     power: this.heroForm.get('power')?.value,
//     gender: this.heroForm.get('gender')?.value
//   };

//   this.heroesService.createHero(hero).subscribe({
//     next: (response) => {
//       alert(response.message || 'Herói criado com sucesso!'); // Mensagem de sucesso
//         this.heroForm.reset();
//     },
//     error: (error) => {
//       console.error('Erro ao criar herói:', error);
//     }
//   })


// }
// }

// src/app/components/create-hero/create-hero.component.ts

import { Component, OnInit } from '@angular/core'; // Adicionado OnInit
import { HeroesService } from '../../services/heroes.service';
// REMOVA ESTA LINHA: import { response } from 'express';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// É uma boa prática ter uma interface para o objeto Hero, se ainda não tiver:
// import { Hero } from '../../models/hero.model'; // Exemplo de importação da interface Hero

@Component({
  selector: 'app-create-hero',
  standalone: false,
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.scss' // Nota: se for um array de estilos, seria 'styleUrls'
})
export class CreateHeroComponent implements OnInit { // Implementa OnInit para usar o lifecycle hook

  heroForm!: FormGroup; // Declaração da FormGroup

  constructor(private heroesService: HeroesService, private fb: FormBuilder) {}

  // ngOnInit é chamado uma vez após a inicialização do componente
  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      // CORRIGIDO: valor inicial 0, validadores numéricos (min/max)
      age: [0, [Validators.required, Validators.min(1), Validators.max(150)]], // Ajuste os valores min/max conforme sua necessidade
      power: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      gender: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });
  }

  // Método auxiliar para acessar controles do formulário no template
  // Este método DEVE estar diretamente na classe, não dentro de ngOnInit
  controle(campo: string) {
    return this.heroForm.get(campo);
  }

  // onSubmit é o método chamado quando o formulário é submetido
  onSubmit() {
    // 1. Verificar se o formulário é válido
    if (this.heroForm.invalid) {
      this.heroForm.markAllAsTouched(); // Marca todos os campos como "tocados" para exibir mensagens de erro
      console.error('Formulário inválido. Por favor, preencha todos os campos corretamente.');
      return; // Impede a continuação se o formulário for inválido
    }

    // 2. Extrair os dados do formulário
    // É uma boa prática tipar o objeto hero se você tiver uma interface Hero
    // const hero: Hero = {
    const hero = { // Usando 'any' ou inferência se não tiver a interface Hero
      name: this.heroForm.get('name')?.value,
      age: this.heroForm.get('age')?.value,
      power: this.heroForm.get('power')?.value,
      gender: this.heroForm.get('gender')?.value
    };

    // 3. Chamar o serviço para criar o herói
    this.heroesService.createHero(hero).subscribe({
      next: (response: any) => { // Use 'any' ou uma interface para o tipo de resposta da sua API
        alert(response.message || 'Herói criado com sucesso!');
        this.heroForm.reset(); // Limpa o formulário após o sucesso
      },
      error: (error) => {
        console.error('Erro ao criar herói:', error);
        alert('Ocorreu um erro ao criar o herói. Por favor, tente novamente.');
      }
    });
  }
}

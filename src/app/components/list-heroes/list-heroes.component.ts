import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-list-heroes',
  standalone: false,
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.scss'
})
export class ListHeroesComponent implements OnInit{

  constructor(private heroesService: HeroesService, private fb: FormBuilder){}
  heroes: any[] = [];
  editHero: any = null;
  heroForm!: FormGroup<{
    name: FormControl<string | null>;
    age: FormControl<number | null>;
    power: FormControl<string | null>;
    gender: FormControl<string | null>;
  }>;

  ngOnInit(): void{
    this.listHeroes();

    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      age: [0, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      power: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      gender: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    })
  }
  get nameControl(): FormControl {
    return this.heroForm.get('name') as FormControl;
  }
  get ageControl(): FormControl {
    return this.heroForm.get('age') as FormControl;
  }
  get powerControl(): FormControl {
    return this.heroForm.get('power') as FormControl;
  }
  get genderControl(): FormControl {
    return this.heroForm.get('gender') as FormControl;
  }


  deleteHero(id: number) {
    this.heroesService.deteleHero(id).subscribe({
      next: (response) => {
        alert(response.message)
      },
      error: (error) => {
        console.error('Erro ao remover herói:', error)
      }
    })
  }

  startEdit(hero: any){
    this.editHero = hero;
    this.heroForm.patchValue({
      name: hero.name,
      age: hero.age,
      power: hero.power,
      gender: hero.gender
    });
  }

  cancelEdit(){
      this.editHero = null;
      this.heroForm.reset();
    }

    listHeroes(){
      this.heroesService.ListHeroes().subscribe({
        next: (response) => {
          console.log('Resposta da API (List Heroes):', response);
          // REMOVA A LINHA ABAIXO se o backend já estiver retornando IDs
          // this.heroes = response.map((hero: { id: number; }, index: number) => ({ ...hero, id: hero.id || index + 1 }));
          this.heroes = response; // Use esta linha se o backend retornar array direto com IDs
          console.log('Heróis carregados:', this.heroes);
        },
        error: (error) => {
          console.log('Erro ao listar heróis: ', error);
    }})}


  onUpdate(id:any){
    if (this.heroForm.invalid){
      this.heroForm.markAllAsTouched();
      return;
    }

    const hero = {
      name: this.heroForm.get('name')?.value,
      age: this.heroForm.get('age')?.value,
      power: this.heroForm.get('power')?.value,
      gender: this.heroForm.get('gender')?.value
    };

    this.heroesService.patchHero(id.toString(), hero).subscribe({
      next: (response) => {
        alert('Herói atualizado com sucesso!');
        this.editHero = null;
        this.heroForm.reset();
        this.listHeroes()
      },
      error: (error) => {
        console.log('Erro ao criar herói', error)
      }
    });
  }

}

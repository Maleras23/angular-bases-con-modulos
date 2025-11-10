import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizaeedName(): string {
    return this.name.toUpperCase();
  }

  getHeroSwaxeiorion(): string {
    return`${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}

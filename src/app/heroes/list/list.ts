import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListComponent {

  public heroNames : string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America' ];

  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}

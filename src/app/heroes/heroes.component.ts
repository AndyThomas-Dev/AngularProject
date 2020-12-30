import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) {}

  // call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() 
  // at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Create a method to retrieve the Observable<Hero[]> from the service.
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Angular makes use of observables as an interface to handle a variety of common asynchronous operations.
import { Observable, of } from 'rxjs';

// This marks the class as one that participates in the dependency injection system. 
@Injectable({
  // When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Add a getHeroes method to return the mock heroes.
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}



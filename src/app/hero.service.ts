import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    this.log('fetch heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }
}

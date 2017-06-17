import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes().slice(1, 5);
    }
}
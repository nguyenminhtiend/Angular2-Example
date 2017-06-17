import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeroesComponent} from './HeroesComponent/hero.component';
import {HeroDetailComponent} from './HeroDetailComponent/hero-detail.component';
import {DashboardComponent} from './DashboardComponent/dashboard.component';

import {AppRoutingModule} from './app-routing.module';

import {HeroService} from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

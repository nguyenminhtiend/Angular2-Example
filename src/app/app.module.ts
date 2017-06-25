import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmployeeModule}   from './Employee/employee.module';

import {AppComponent}  from './app.component';
import {HeroesComponent} from './HeroesComponent/hero.component';
import {HeroDetailComponent} from './HeroDetailComponent/hero-detail.component';
import {DashboardComponent} from './DashboardComponent/dashboard.component';

import {AppRoutingModule} from './app-routing.module';

import {HeroService} from './hero.service';
import {HttpInterceptor} from './services/http.interceptor';

import '../styles/styles.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EmployeeModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [HeroService, HttpInterceptor],
    bootstrap: [AppComponent]
})
export class AppModule {
}

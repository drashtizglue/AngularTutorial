import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms'; //<--NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { AppComponent }  from './app.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]	
})

export class AppModule { }


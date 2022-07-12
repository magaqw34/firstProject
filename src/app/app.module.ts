import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {DropdownModule} from 'primeng/dropdown';
import { ListOfGamesComponent } from './list-of-games/list-of-games.component';
import { TruthOrDareComponent } from './truth-or-dare/truth-or-dare.component';
import { SecretSantaComponent } from './secret-santa/secret-santa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListOfGamesComponent,
    TruthOrDareComponent,
    SecretSantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DropdownModule,
    MatMenuModule,
    MatGridListModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListOfGamesComponent } from './list-of-games/list-of-games.component';
import { SecretSantaComponent } from './secret-santa/secret-santa.component';
import { TruthOrDareComponent } from './truth-or-dare/truth-or-dare.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-of-games', pathMatch: 'full' },
  {path:'list-of-games',component:ListOfGamesComponent},
  {path:'truth-or-dare',component:TruthOrDareComponent},
  {path:'secret-santa',component:SecretSantaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

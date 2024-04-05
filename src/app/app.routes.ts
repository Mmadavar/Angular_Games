import { Routes } from '@angular/router';
import { TowersComponent } from './towers/towers.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

export const routes: Routes = [
  { path: 'towers', component: TowersComponent },
  { path: 'puzzle', component: PuzzleComponent },
];

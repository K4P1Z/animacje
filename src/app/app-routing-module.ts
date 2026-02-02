import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Animacja1 } from './components/animacja1/animacja1';
import { Animacja2 } from './components/animacja2/animacja2';
import { Animacja3 } from './components/animacja3/animacja3';

import { Animacja10 } from './components/animacja10/animacja10';
import { Animacja11 } from './components/animacja11/animacja11';
import { Animacja12 } from './components/animacja12/animacja12';
import { Animacja13 } from './components/animacja13/animacja13';
import { Animacja14 } from './components/animacja14/animacja14';
import { Animacja15 } from './components/animacja15/animacja15';
import { Animacja16 } from './components/animacja16/animacja16';
import { Animacja17 } from './components/animacja17/animacja17';
import { Animacja18 } from './components/animacja18/animacja18';
import { Animacja19 } from './components/animacja19/animacja19';

const routes: Routes = [
  {path:"",component:Start},
  {path:"animacja1",component:Animacja1},
  {path:"animacja2",component:Animacja2},
  {path:"animacja3",component:Animacja3},

  {path:"animacja10",component:Animacja10},
  {path:"animacja11",component:Animacja11},
  {path:"animacja12",component:Animacja12},
  {path:"animacja13",component:Animacja13},
  {path:"animacja14",component:Animacja14},
  {path:"animacja15",component:Animacja15},
  {path:"animacja16",component:Animacja16},
  {path:"animacja17",component:Animacja17},
  {path:"animacja18",component:Animacja18},
  {path:"animacja19",component:Animacja19},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

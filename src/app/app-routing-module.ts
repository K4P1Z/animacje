import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Animacja1 } from './components/animacja1/animacja1';
import { Animacja2 } from './components/animacja2/animacja2';
import { Animacja3 } from './components/animacja3/animacja3';
import { Animacja4 } from './components/animacja4/animacja4';
import { Animacja5 } from './components/animacja5/animacja5';
import { Animacja6 } from './components/animacja6/animacja6';
import { Animacja7 } from './components/animacja7/animacja7';
import { Animacja8 } from './components/animacja8/animacja8';
import { Animacja9 } from './components/animacja9/animacja9';
import { Animacja10 } from './components/animacja10/animacja10';
import { Animacja11 } from './components/animacja11/animacja11';
import { Animacja12 } from './components/animacja12/animacja12';
import { Animacja13 } from './components/animacja13/animacja13';

const routes: Routes = [
  {path:"",component:Start},
  {path:"animacja1",component:Animacja1},
  {path:"animacja2",component:Animacja2},
  {path:"animacja3",component:Animacja3},
  {path:"animacja4",component:Animacja4},
  {path:"animacja5",component:Animacja5},
  {path:"animacja6",component:Animacja6},
  {path:"animacja7",component:Animacja7},
  {path:"animacja8",component:Animacja8},
  {path:"animacja9",component:Animacja9},
  {path:"animacja10",component:Animacja10},
  {path:"animacja11",component:Animacja11},
  {path:"animacja12",component:Animacja12},
  {path:"animacja13",component:Animacja13}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

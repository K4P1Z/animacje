import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Animacja1 } from './components/animacja1/animacja1';
import { Animacja2 } from './components/animacja2/animacja2';
import { Animacja3 } from './components/animacja3/animacja3';
import { Animacja11 } from './components/animacja11/animacja11';
import { Animacja12 } from './components/animacja12/animacja12';
import { Animacja13 } from './components/animacja13/animacja13';
import { Animacja10 } from './components/animacja10/animacja10';
import { Animacja14 } from './components/animacja14/animacja14';
import { Animacja15 } from './components/animacja15/animacja15';
import { Animacja16 } from './components/animacja16/animacja16';
import { Animacja17 } from './components/animacja17/animacja17';
import { Animacja18 } from './components/animacja18/animacja18';
import { Animacja19 } from './components/animacja19/animacja19';


@NgModule({
  declarations: [
    App,
    Start,
    Animacja1,
    Animacja2,
    Animacja3,
    Animacja11,
    Animacja12,
    Animacja13,
    Animacja10,
    Animacja14,
    Animacja15,
    Animacja16,
    Animacja17,
    Animacja18,
    Animacja19
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

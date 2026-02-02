import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
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


@NgModule({
  declarations: [
    App,
    Start,
    Animacja1,
    Animacja2,
    Animacja3,
    Animacja4,
    Animacja5,
    Animacja6,
    Animacja7,
    Animacja8,
    Animacja9,
    Animacja10,
    Animacja11,
    Animacja12,
    Animacja13
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

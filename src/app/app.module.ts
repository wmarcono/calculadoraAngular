import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CalculadoraModule} from './calculadora/calculadora.module';

import { AppComponent } from './app.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

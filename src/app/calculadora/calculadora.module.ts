import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import {CalculadoraService } from './service/calculadora.service';
 

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculadoraComponent],
  providers:[CalculadoraService]
})
export class CalculadoraModule { }

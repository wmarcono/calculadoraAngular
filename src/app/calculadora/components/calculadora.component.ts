import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';
import { ElementSchemaRegistry, identifierModuleUrl } from '@angular/compiler';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private CalculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }
    //metodo que inicializa as variaveis e limpa o display
  limpar(): void{
    this.numero1 = "0";
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }
    //metodo adiciona numero 
  adicionarNumero(numero: string): void{
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
      }else{
    this.numero2 = this.concatenarNumero(this.numero2, numero);
      }
    }
      //metodo concatena os numeros e valida 0 e ponto decimal
    concatenarNumero(numAtual: string, numConcat: string): string{
      if(numAtual === '0' || numAtual === null){
        numAtual = '';
      }
        if(numConcat === '.' && numAtual === ''){
          return '0.';
        }
          if(numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
          }
              return numAtual + numConcat;
    }
        //metod define  aoperação a ser executada
    definirOperacao(operacao: string): void{
      if(this.operacao === null){
        this.operacao = operacao;
        return;
      }

      if(this.numero2 !== null){
        this.resultado = this.CalculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
        this.operacao = operacao;
        this.numero1 = this.resultado.toString();
        this.numero2 = null;
        this.resultado = null;
      }
    }
        //metodo calcula quando o = acionado
    calcular(): void{
      if(this.numero2 === null){
        return;
      }
        this.resultado = this.CalculadoraService.calcular(
          parseFloat(this.numero1),
            parseFloat(this.numero2),
              this.operacao);
        }
          //metodo especial do angular para mostrar na tela
        get display(): string{
          if(this.resultado !== null){
            return this.resultado.toString();
          }
          if(this.numero2 !== null){
            return this.numero2;
          }
          return this.numero1;
        }

}

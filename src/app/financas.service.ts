import { Injectable } from '@angular/core';
import { LancamentoService } from './lancamento.service';

@Injectable({
  providedIn: 'root'
})
export class FinancasService {

  public ganhos: number = 0;
  public gastos: number = 0;
  public balanco: number = this.ganhos - this.gastos;

  constructor(private lancamento: LancamentoService) { }

  getGanhos() {
    return this.ganhos;
  }
  getGastos() {
    return this.gastos;
  }
  getBalanco() {
    return this.balanco;
  }

  atualizaValoresGanhosGastosBalanco() {
    this.gastos = 0;
    this.ganhos = 0;
    this.lancamento.getLancamentos().forEach((lancamento) => {
      if (lancamento.tipo === 'Gasto') {
        this.gastos +=  parseFloat(lancamento.valor.toString());
      } else if (lancamento.tipo === 'Renda') {
        this.ganhos +=  parseFloat(lancamento.valor.toString());
      } else {
        console.log('Erro no tipo de lancamento');
      }
    });
    this.balanco = this.ganhos - this.gastos;
  }
}

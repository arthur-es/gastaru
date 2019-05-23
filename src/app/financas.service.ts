import { Injectable } from '@angular/core';
import { LancamentoService } from './lancamento.service';

@Injectable({
  providedIn: 'root'
})
export class FinancasService {

  public ganhos: number = 1000;
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
    this.lancamento.getLancamentos().forEach((lancamento) => {
      this.gastos +=  parseFloat(lancamento.valor.toString());
    });
    this.balanco = this.ganhos - this.gastos;
  }
}

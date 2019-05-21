import { Component, OnInit } from '@angular/core';
import { Lancamento } from './lancamento.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  ganhos: number = 1000;
  gastos: number = 0;
  balanco: number = this.ganhos - this.gastos;

  lancamentos: Lancamento[] = [];

  cadastrarLancamento(evento: any) {
    this.lancamentos.unshift({
      nome: evento.nome,
      valor: evento.valor,
      data: evento.data,
      categoria: evento.categoria
    });
    this.atualizaValoresGanhosGastosBalanco();
  }

  atualizaValoresGanhosGastosBalanco() {
    this.gastos = 0;
    this.lancamentos.forEach((lancamento) => {
      this.gastos +=  parseFloat(lancamento.valor.toString());
    });
    this.balanco = this.ganhos - this.gastos;
  }

  constructor() { }

  ngOnInit() {
  }

}

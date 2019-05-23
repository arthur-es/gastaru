import { Injectable } from '@angular/core';
import { Lancamento } from './pages/main/lancamento.model';
import { FinancasService } from './financas.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor() { }

  lancamentos: Lancamento[] = [];

  cadastrarLancamento(evento: any) {
    this.lancamentos.unshift({
      nome: evento.nome,
      valor: evento.valor,
      data: evento.data,
      categoria: evento.categoria
    });
  }

  getLancamentos() {
    return this.lancamentos;
  }
}

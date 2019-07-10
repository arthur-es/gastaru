import { Injectable } from '@angular/core';
import { Lancamento } from './pages/main/lancamento.model';
import { FinancasService } from './financas.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient, private categoriaServ: CategoriaService) { }

  lancamentos: Lancamento[] = [];
  baseUrl = 'http://127.0.0.1:8000/api/';

  cadastrarLancamento(evento: any) {
    console.log(this.categoriaServ.getCategoryIdx(evento.categoria.name));
    const data = {
      tipo: evento.tipo,
      nome: evento.nome,
      valor: evento.valor,
      data: evento.data,
      categoria: this.categoriaServ.getCategoryIdx(evento.categoria.name)
    }
    this.http.post(this.baseUrl+'operation/', data).subscribe(
      response => {
        this.lancamentos.unshift({
          tipo: evento.tipo,
          nome: evento.nome,
          valor: evento.valor,
          data: evento.data,
          categoria: evento.categoria
        });
      },
      error => {
        alert('Não foi possível cadastrar o lançamento');
        console.log(error);
      }
    );
  }

  pullLancamentos() {
    this.http.get(this.baseUrl+'operation/').subscribe(
      data => {
        this.lancamentos = data;
        //console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getLancamentos() {
    return this.lancamentos;
  }
}

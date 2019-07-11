import { Injectable, Injector } from '@angular/core';
import { Lancamento } from './pages/main/lancamento.model';
import { FinancasService } from './financas.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { asElementData } from '@angular/core/src/view';

interface Resposta {
  tipo: string;
  nome: string;
  valor: number;
  data: string;
  categoria: number;
 }

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  [x: string]: any;

  constructor(private http: HttpClient, private categoriaServ: CategoriaService, private financaServ : FinancasService) { }

  lancamentos: Lancamento[] = [];
  baseUrl = 'http://127.0.0.1:8000/api/';

  cadastrarLancamento(evento: any) : Observable<any> {
    //console.log(evento);
    const data : Resposta = {
      tipo: evento.tipo,
      nome: evento.nome,
      valor: evento.valor,
      data: evento.data,
      categoria: this.categoriaServ.getCategoryIdx(evento.categoria.name)
    };
    var observ = this.http.post(this.baseUrl+'operation/', data)
    
    observ.subscribe(
      response => {
        this.lancamentos.unshift({
          tipo: data.tipo,
          nome: data.nome,
          valor: data.valor,
          data: data.data,
          categoria: this.categoriaServ.getCategoryAt(data.categoria)
        })
        var ganhos = this.financaServ.getGanhos();
        var gastos = this.financaServ.getGastos();
        if (data.tipo === 'Renda')
          ganhos += parseFloat(data.valor.toString());
        else
          gastos += parseFloat(data.valor.toString());
        this.financaServ.setValoresGanhosGastosBalanco(ganhos, gastos);
      },
      error => {
        alert('Não foi possível cadastrar o lançamento');
        console.log(error);
      }
    );

    return observ;
  }

  registraLancamentoServidor(data:Resposta) : Observable<any> {
    console.log(data);
    return this.http.post(this.baseUrl+'operation/', data);
  }

  pegaLancamentosServidor(): Observable<any> {
    return this.http.get(this.baseUrl+'operation/');
  }

  pullLancamentos() : Observable<any> {
    var observ = this.pegaLancamentosServidor();
    
    observ.subscribe( 
      data => {
        this.lancamentos = [];
        var ganhos = 0;
        var gastos = 0;
        data.forEach((element: { tipo: string; nome: string; valor: number; data: string; categoria: number; }) => {
          this.lancamentos.unshift({
            tipo: element.tipo,
            nome: element.nome,
            valor: element.valor,
            data: element.data,
            categoria: this.categoriaServ.getCategoryAt(element.categoria)
          });
          if (element.tipo === 'Gasto') {
            gastos +=  parseFloat(element.valor.toString());
          } else if (element.tipo === 'Renda') {
            ganhos +=  parseFloat(element.valor.toString());
          }
        });
        this.financaServ.setValoresGanhosGastosBalanco(ganhos, gastos);
        //this.injector.get(FinancasService).atualizaValoresGanhosGastosBalanco();
        //console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    return observ;
  }

  getLancamentos() {
    return this.lancamentos;
  }
}

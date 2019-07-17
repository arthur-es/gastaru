import { Injectable, Injector } from '@angular/core';
import { Lancamento } from './pages/main/lancamento.model';
import { FinancasService } from './financas.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { asElementData } from '@angular/core/src/view';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { forEach } from '@angular/router/src/utils/collection';

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

  deletarLancamento (id : number) : Observable <any> {
    var observ = this.http.delete(this.baseUrl+'operation/'+id+'/');
    observ.subscribe(
      response => {
        var idx;
        var achou : boolean = false;
        for (var i : number = 0; i < this.lancamentos.length; i++) {
          if (this.lancamentos[i].id === id) {
            idx = i;
            achou = true;
            break;
          }
        }

        if (!achou) {
          this.pullLancamentos()
          return observ;
        }
  
        var ganhos = this.financaServ.getGanhos();
        var gastos = this.financaServ.getGastos();
        if (this.lancamentos[idx].tipo === 'Gasto') {
          gastos -= parseFloat(this.lancamentos[idx].valor.toString());
        } else if (this.lancamentos[idx].tipo === 'Renda') {
          ganhos -= parseFloat(this.lancamentos[idx].valor.toString());
        }
        this.financaServ.setValoresGanhosGastosBalanco(ganhos, gastos);

        this.lancamentos.splice(idx, 1);
      },
      error => {
        console.log(error);
      }
    );

    return observ;
  }

  atualizarLancamento(objeto : Lancamento) : Observable <any> {
    const data : Resposta = {
      tipo: objeto.tipo,
      nome: objeto.nome,
      valor: parseFloat(objeto.valor.toString()),
      data: objeto.data,
      categoria: this.categoriaServ.getCategoryIdx(objeto.categoria.name)
    };
    var observ = this.http.put(this.baseUrl+'operation/'+objeto.id+'/', data);
    observ.subscribe( response => {
      var idx;
      var achou : boolean = false;
      for (var i : number = 0; i < this.lancamentos.length; i++) {
        if (this.lancamentos[i].id === objeto.id) {
          idx = i;
          achou = true;
          break;
        }
      }

      if (!achou) {
        this.pullLancamentos()
        return observ;
      }

      var ganhos = this.financaServ.getGanhos();
      var gastos = this.financaServ.getGastos();
      if (this.lancamentos[idx].tipo === 'Gasto') {
        gastos -= parseFloat(this.lancamentos[idx].valor.toString());
        gastos += parseFloat(objeto.valor.toString());
      } else if (this.lancamentos[idx].tipo === 'Renda') {
        ganhos -= parseFloat(this.lancamentos[idx].valor.toString());
        ganhos += parseFloat(objeto.valor.toString());
      }
      this.financaServ.setValoresGanhosGastosBalanco(ganhos, gastos);

      this.lancamentos[idx] = objeto;
    },
    error => {
      console.log(error);
    });
    
    return observ;
  }

  cadastrarLancamento(evento: any) : Observable<any> {
    //console.log(evento);
    const data_send : Resposta = {
      tipo: evento.tipo,
      nome: evento.nome,
      valor: evento.valor,
      data: evento.data,
      categoria: this.categoriaServ.getCategoryIdx(evento.categoria.name)
    };
    var observ = this.http.post(this.baseUrl+'operation/', data_send);
    
    observ.subscribe(
      (data : any) => {
        this.lancamentos.unshift({
          tipo: data_send.tipo,
          nome: data_send.nome,
          valor: data_send.valor,
          data: data_send.data,
          categoria: this.categoriaServ.getCategoryAt(data_send.categoria),
          id: data.id
        })
        var ganhos = this.financaServ.getGanhos();
        var gastos = this.financaServ.getGastos();
        if (data_send.tipo === 'Renda')
          ganhos += parseFloat(data_send.valor.toString());
        else
          gastos += parseFloat(data_send.valor.toString());
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
        console.log(data);
        data.forEach((element: { tipo: string; nome: string; valor: number; data: string; categoria: number; id: number}) => {
          this.lancamentos.unshift({
            tipo: element.tipo,
            nome: element.nome,
            valor: element.valor,
            data: element.data,
            categoria: this.categoriaServ.getCategoryAt(element.categoria),
            id: element.id
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

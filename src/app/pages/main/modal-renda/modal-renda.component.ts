import { Component, OnInit } from '@angular/core';
import {LancamentoService} from '../../../lancamento.service';
import {FinancasService} from '../../../financas.service';

@Component({
  selector: 'app-modal-renda',
  templateUrl: './modal-renda.component.html',
  styleUrls: ['./modal-renda.component.css']
})
export class ModalRendaComponent implements OnInit {

  cadastrarLancamento(event:any) {
    this.lancamentoServ.cadastrarLancamento(event);
  }

  constructor(private lancamentoServ: LancamentoService, private financasServ: FinancasService) { }

  ngOnInit() {
  }

}

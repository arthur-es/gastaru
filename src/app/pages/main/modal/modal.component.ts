import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { LancamentoService } from 'src/app/lancamento.service';
import { FinancasService } from 'src/app/financas.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  cadastrarLancamento(event:any) {
    this.lancamentoServ.cadastrarLancamento(event);
    this.financasServ.atualizaValoresGanhosGastosBalanco();
  }

  constructor(private lancamentoServ: LancamentoService, private financasServ: FinancasService) { }

  ngOnInit() {
  }

}

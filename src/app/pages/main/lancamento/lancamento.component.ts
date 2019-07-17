import { Component, OnInit, Input } from '@angular/core';
import { Lancamento } from '../lancamento.model';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { EntryFormAttComponent } from '../entry-form-att/entry-form-att.component';
import { LancamentoService } from 'src/app/lancamento.service';

export interface DialogConfirm {
  mod : boolean;
}

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {


  @Input() lancamento: Lancamento;
  @Input() ver : DialogConfirm = {mod : false};

  constructor(public dialog: MatDialog, private lancamentoServ : LancamentoService) { }

  ngOnInit() {
  }

  onEdit() {
    this.ver.mod = false;
    let lancTemporario = Object.assign({}, this.lancamento);
    const dialogRef = this.dialog.open(EntryFormAttComponent, {
      data : {lanc: lancTemporario, ver : this.ver}, 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(lancTemporario);
      if (this.ver.mod) {
        this.lancamentoServ.atualizarLancamento(lancTemporario);
      }
    });
  }

  onDelete() {
    this.lancamentoServ.deletarLancamento(this.lancamento.id);
  }
}

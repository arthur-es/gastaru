import { Component, OnInit } from '@angular/core';
import { Lancamento } from './lancamento.model';
import { CategoriaService } from 'src/app/categoria.service';
import { LancamentoService } from 'src/app/lancamento.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { FinancasService } from 'src/app/financas.service';
import {ModalRendaComponent} from './modal-renda/modal-renda.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  public getCategorias() {
    return this.categorias.getCategories();
  }

  public getLancamentos() {
    return this.lancamento.getLancamentos();
  }

  constructor(private categorias: CategoriaService, private lancamento: LancamentoService,
              public dialog: MatDialog, private financa: FinancasService) { }

  openDialogGastos() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogRendas() {
    const dialogRef = this.dialog.open(ModalRendaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

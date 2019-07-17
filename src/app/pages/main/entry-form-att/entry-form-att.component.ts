import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Inject } from '@angular/core';
import { CategoriaService } from 'src/app/categoria.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Lancamento } from '../lancamento.model';
import { DialogConfirm } from '../lancamento/lancamento.component';

export interface DialogData {
  lanc: Lancamento;
  ver: DialogConfirm;
}

@Component({
  selector: 'app-entry-form-att',
  templateUrl: './entry-form-att.component.html',
  styleUrls: ['./entry-form-att.component.css']
})
export class EntryFormAttComponent implements OnInit {

  @ViewChild('inputNome') inputNome: ElementRef;

  @Output() editouLancamento = new EventEmitter();

  tipo: string;
  nome: string;
  date = new FormControl(new Date());
  valor: number;
  category: number;

  isSelected: boolean = false;

  public getCategorias() {
    return this.categorias.getCategories();
  }

  constructor(private categorias: CategoriaService, public dialogRef: MatDialogRef<EntryFormAttComponent>, @Inject(MAT_DIALOG_DATA) public data : DialogData) {
    this.tipo = data.lanc.tipo;
    this.nome = data.lanc.nome;
    this.date = new FormControl(new Date(data.lanc.data.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")) );
    this.valor = data.lanc.valor;
    this.category = this.categorias.getCategoryIdx(data.lanc.categoria.name);
  }

  ngOnInit() {
  }

  save() {
    if (this.nome == '' || this.valor == 0) {
      alert('Nenhum campo pode estar vazio!');
    } else {
      const data: Date = this.date.value;
      //console.log(this.categorias.getCategoryAt(this.category));

      this.data.lanc.tipo = this.tipo;
      this.data.lanc.nome = this.nome;
      this.data.lanc.data = `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;
      this.data.lanc.valor = this.valor;
      this.data.lanc.categoria = this.categorias.getCategoryAt(this.category);
      this.data.ver.mod = true;

      this.cancel();
      this.inputNome.nativeElement.focus();
    }
  }

  cancel() {
    this.nome = '';
    this.valor = 0;
    this.dialogRef.close();
  }

}

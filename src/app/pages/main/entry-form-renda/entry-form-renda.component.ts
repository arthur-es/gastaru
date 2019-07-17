import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoriaService } from 'src/app/categoria.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-entry-form-renda',
  templateUrl: './entry-form-renda.component.html',
  styleUrls: ['./entry-form-renda.component.css']
})
export class EntryFormRendaComponent implements OnInit {

  @ViewChild('inputNome') inputNome: ElementRef;

  @Output() cadastrouLancamento = new EventEmitter();

  tipo: string = 'Renda';
  nome: string = '';
  date = new FormControl(new Date());
  valor: number;
  category: number;
  isSelected: boolean = false;

  public getCategorias() {
    return this.categorias.getCategories();
  }

  constructor(private categorias: CategoriaService, private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  save() {
    if (this.nome == '' || this.valor == 0) {
      alert('Nenhum campo pode estar vazio!');
    } else {
      const data: Date = this.date.value;
      this.cadastrouLancamento.emit({
        tipo: this.tipo,
        nome: this.nome,
        valor: this.valor,
        data: `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`,
        categoria: this.categorias.getCategoryAt(this.category)
      });
      this.cancel();
      this.inputNome.nativeElement.focus();
    }
  }

  cancel() {
    this.nome = '';
    this.valor = 0;
    this.dialogRef.closeAll();
  }

}

import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  @ViewChild('inputNome') inputNome: ElementRef;

  @Output() cadastrouLancamento = new EventEmitter();

  nome: string = '';
  date = new FormControl(new Date());
  valor: number;
  isSelected: boolean = false;

  categories = [
    { name: 'Comida', icon: 'fastfood' },
    { name: 'Carro', icon: 'directions_car'},
    { name: 'Casa', icon: 'home'}
  ];

  constructor() { }

  ngOnInit() {
  }

  save() {
    if(this.nome == '' || this.valor == 0) {
      alert('Nenhum campo pode estar vazio!');
    } else {
        const data: Date = this.date.value;
        this.cadastrouLancamento.emit({
        nome: this.nome,
        valor: this.valor,
        data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
        categoria: 'categoria padrao'
      });
        this.cancel();
        this.inputNome.nativeElement.focus();
    }
  }

  cancel() {
    this.nome = '';
    this.valor = 0;
  }

}

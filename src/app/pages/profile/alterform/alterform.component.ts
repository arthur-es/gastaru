import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-alterform',
  templateUrl: './alterform.component.html',
  styleUrls: ['./alterform.component.css']
})
export class AlterformComponent implements OnInit {

  @ViewChild('inputNome') inputNome: ElementRef;

  @Output() alterouUsuario = new EventEmitter();

  nome: string;
  email: string;
  telefone: number;

  constructor(private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  save() {
    if (this.nome === '' || this.email === '') {
      alert('Nenhum campo pode estar vazio!');
    } else {
      this.alterouUsuario.emit({
        nome: this.nome,
        email: this.email,
        telefone: this.telefone
      });
      this.cancel();
      this.inputNome.nativeElement.focus();
    }
  }

  cancel() {
    this.nome = '';
    this.email = '';
    this.dialogRef.closeAll();
  }
}

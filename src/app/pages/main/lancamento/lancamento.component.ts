import { Component, OnInit, Input } from '@angular/core';
import { Lancamento } from '../lancamento.model';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  @Input() lancamento: Lancamento;

  constructor() { }

  ngOnInit() {
  }

}

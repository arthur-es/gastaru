import { Component, OnInit, Input } from '@angular/core';
import { FinancasService } from 'src/app/financas.service';


@Component({
  selector: 'app-money-status',
  templateUrl: './money-status.component.html',
  styleUrls: ['./money-status.component.css']
})
export class MoneyStatusComponent implements OnInit {

  getGastos() {
    return this.financas.getGastos();
  }

  getGanhos() {
    return this.financas.getGanhos();
  }

  getBalanco() {
    return this.financas.getBalanco();
  }


  constructor(private financas: FinancasService) { }

  ngOnInit() {
  }


}

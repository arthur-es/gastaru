import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-money-status',
  templateUrl: './money-status.component.html',
  styleUrls: ['./money-status.component.css']
})
export class MoneyStatusComponent implements OnInit {

  @Input() ganhos: number;
  @Input() gastos: number;
  @Input() balanco: number;


  constructor() { }

  ngOnInit() {
  }


}

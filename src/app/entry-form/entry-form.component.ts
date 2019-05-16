import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  memo: string = "";
  date = new FormControl(new Date());
  value: number = 0;
  isSelected: boolean = false;

  categories = [
    { name: "Comida", icon: "fastfood" },
    { name: "Carro", icon: "directions_car"},
    { name: "Casa", icon: "home"}
  ]

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.memo = "";
    this.value = 0;
  }

}

import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categories:Categoria[] = [
    { name: 'Comida', icon: 'fastfood' },
    { name: 'Carro', icon: 'directions_car'},
    { name: 'Casa', icon: 'home'},
    { name: 'Salario', icon: 'money_attach'}
  ];

  getCategories() {
    return this.categories;
  }

  getCategoryAt(i:number) {
    return this.categories[i];
  }

  getCategoryIdx(name:String): number {
    for (var i : number = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === name)
        return i;
    }
    return -1;
  }
}

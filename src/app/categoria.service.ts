import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categories:Categoria[] = [
    { name: 'Comida', icon: 'fastfood' },
    { name: 'Carro', icon: 'directions_car'},
    { name: 'Casa', icon: 'home'}
  ];

  getCategories() {
    return this.categories;
  }

  getCategoryAt(i:number) {
    return this.categories[i];
  }
}

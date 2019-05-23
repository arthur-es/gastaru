import { Categoria } from 'src/app/categoria.model';

export interface Lancamento {
    nome: string;
    valor: number;
    data: string;
    categoria: Categoria;
}

import { Categoria } from 'src/app/categoria.model';

export interface Lancamento {
    tipo: string;
    nome: string;
    valor: number;
    data: string;
    categoria: Categoria;
    id: number;
}

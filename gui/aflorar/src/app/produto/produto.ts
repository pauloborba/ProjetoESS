import { Marca } from "../marca/marca";
import { Categoria } from "../categoria/categoria";

export class Produto {
    id: string;
    nome: string;
    marca: Marca;
    categorias: Categoria[];
    descricao: string;
    preco: number;
    quantidade: number;
    imagem;
}
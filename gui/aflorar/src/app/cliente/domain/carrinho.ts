import { Produto } from '../../produto/produto';

export class Carrinho {
    produtos: Produto[];

    constructor(){
        this.produtos = [];
    }
}
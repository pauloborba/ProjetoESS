import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';


import { ProdutoCarrinho } from '../carrinho/produtocarrinho';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private produtos: Produto[];

  private produtoCarrinho: ProdutoCarrinho[];

  private precoTotal: number = 0;

  constructor() { }

  ngOnInit() {
    var cliente = JSON.parse(localStorage.getItem("clienteLogado"));
    console.log(cliente);
    this.produtos = cliente.carrinho.listaProdutos;
    for (let produto of this.produtos){
      console.log(produto.preco);
      this.precoTotal += produto.preco;
    }
    console.log(this.produtos);
  }

}

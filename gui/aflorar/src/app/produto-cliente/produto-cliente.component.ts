import { Component, OnInit } from '@angular/core';
import { ProdutoCliente } from './produto-cliente';

@Component({
  selector: 'app-produto-cliente',
  templateUrl: './produto-cliente.component.html',
  styleUrls: ['./produto-cliente.component.css']
})
export class ProdutoClienteComponent implements OnInit {

  private produtoClienteList: ProdutoCliente[];

  constructor() { }

  ngOnInit() {
    this.produtoClienteList = [];

    let produtoCliente: ProdutoCliente = {
      id : "1",
      nome : "Moto g4 plus",
      quantidade : 10,
      preco : 150,
      imagem : "assets/iphone.png"
    };

    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
    this.produtoClienteList.push(produtoCliente);
  }

}

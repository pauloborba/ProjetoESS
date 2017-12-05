import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/service/produto.service';
import { Produto } from '../produto/produto';
import { HomeClienteService } from './service/home-cliente.service';
import { toast } from 'angular2-materialize';
import { CategoriaService } from '../categoria/service/categoria.service';
import { MarcaService } from '../marca/service/marca.service';
import { Categoria } from '../categoria/categoria';
import { Marca } from '../marca/marca';
import { ClienteService } from '../cliente/service/cliente.service';
import * as global from '.././global';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css'],
})
export class HomeClienteComponent implements OnInit {

  private produtos: Produto[];
  private categorias: Categoria[];
  private marcas: Marca[];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private homeClienteService: HomeClienteService,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.produtoService.getAllProdutos()
    .then(res => this.produtos = res)
    .catch(err => alert(err));

    this.categoriaService.getAllCategorias()
    .then(res => this.categorias = res)
    .catch(err => alert(err));

    this.marcaService.getAllMarcas()
    .then(res => this.marcas = res)
    .catch(err => alert(err));
  }

  adicionarProdutoCarrinho(produto: Produto){
    if (localStorage.getItem("clienteLogado")){
      var cliente = JSON.parse(localStorage.getItem("clienteLogado"));
      console.log(cliente);
      cliente.carrinho.listaProdutos.push(produto);
      this.clienteService.atualizarCliente(cliente);
      toast(produto.nome+" inserido no carrinho!", 1500);
    }
    else{
      toast("Realize login para inserir no carrinho!", 1500);
    }
  }

}

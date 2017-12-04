import { MarcaService } from './../../marca/service/marca.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Categoria } from '../../categoria/categoria';
import { Marca } from './../../marca/marca';
import { ProdutoService } from './../service/produto.service';
import { CategoriaService } from './../../categoria/service/categoria.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  private produtos: Produto[];
  private categorias: Categoria[];
  private marcas: Marca[];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService
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

  
  deleteProduto(produto: Produto){
    if(confirm("Tem certeza que deseja excluir a o produto " + produto.nome + "?")){
      this.produtoService.deleteProduto(produto.id)
      .then(res => {
        let index = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        alert("Produto deletado com sucesso");
      })
      .catch(err => alert(err));
    }
  }
  
  getCategorias(categorias: Categoria[]){
    let res: string = "";
    for(let i = 0; i < categorias.length; i++){
      res += categorias[i].nome;
      if(i != categorias.length-1){
        res += ", ";
      }
    }
    return res;
  }
  
  updateProduto(produto: Produto, num: number){
    let p = new Produto;

    p.id = produto.id;
    p.nome = produto.nome;
    p.descricao = produto.descricao;
    p.marca = produto.marca;
    p.preco = produto.preco;
    p.quantidade = produto.quantidade;
    p.categorias = produto.categorias;

    if(num == 1){
      let inputNome = <HTMLInputElement>document.getElementById("nome-"+produto.id);
      p.nome = inputNome.value;
    }
    else if(num == 2){
      let inputMarca = (<HTMLSelectElement>document.getElementById("marca-"+produto.id)).options;
      let m = new Marca;
      for(let i = 0; i < inputMarca.length; i++){
        if(inputMarca[i].selected){
          m.id = inputMarca[i].value;
          m.nome = null;
        }
      }
      p.marca = m;
    }
    else if(num == 3){
      let inputPreco = <HTMLInputElement>document.getElementById("preco-"+produto.id);
      if(isNaN(parseFloat(inputPreco.value))){
        alert("Valor inválido");
        return;
      }
      p.preco = parseFloat(inputPreco.value);
    }
    else if(num == 4){
      let inputCategorias = (<HTMLSelectElement>document.getElementById("categorias-"+produto.id)).options;
      let cats: Categoria[] = [];
      for(let i = 0; i < inputCategorias.length; i++){
        if(inputCategorias[i].selected){
          let c = new Categoria;
          c.id = inputCategorias[i].value;
          c.nome = null;
          cats.push(c);
        }
      }
      p.categorias = cats;
    }
    else if(num == 5){
      let inputQuantidade = <HTMLInputElement>document.getElementById("quantidade-"+produto.id);
      if(isNaN(parseInt(inputQuantidade.value))){
        alert("Valor inválido");
        return;
      }
      p.quantidade = parseInt(inputQuantidade.value);
    }
    else if(num == 6){
      let inputDescricao = <HTMLTextAreaElement>document.getElementById("descricao-"+produto.id);
      p.descricao = inputDescricao.value;
    }
    
    this.produtoService.updateProduto(p)
      .then(res => {
        this.categorias.splice(this.categorias.indexOf(produto), 1, p);
        alert("Produto atualizado com sucesso");
      })
      .catch(err => alert(err));
  }

}

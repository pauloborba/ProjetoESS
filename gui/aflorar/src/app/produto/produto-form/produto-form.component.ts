import { Produto } from './../produto';
import { Categoria } from './../../categoria/categoria';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { MarcaService } from '../../marca/service/marca.service';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { Marca } from '../../marca/marca';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  preview: string;

  categorias: Categoria[];
  marcas: Marca[];

  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem: File = null;
  marca: Marca;


  constructor(
    private produtoService: ProdutoService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categoriaService.getAllCategorias()
    .then(res => this.categorias = res)
    .catch(err => alert(err));
   
    this.marcaService.getAllMarcas()
      .then(res => this.marcas = res)
      .catch(err => alert(err));
  }

  previewImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.preview = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addNewProduto(){
    var produto: Produto = new Produto;

    let selectedCategorias: Categoria[] = [];

    let tempCategorias = (<HTMLSelectElement>document.getElementById("categorias_selected")).options;
    for(let i = 0; i < tempCategorias.length; i++){
      if(tempCategorias[i].selected){
        let c = new Categoria;
        c.id = tempCategorias[i].value.slice(4, -1);
        selectedCategorias.push(c);
      }
    }

    produto.id = null;
    produto.descricao = this.descricao;
    produto.nome = this.nome;
    produto.marca = this.marca;
    produto.categorias = selectedCategorias;
    produto.preco = this.preco;
    produto.quantidade = this.quantidade;
    
    if(!this.isProdutoValid(produto)){
      alert("Campos de produto inválidos ou produto já cadastrado");
      return;
    }

    this.produtoService.addNewProduto(produto)
      .then()
      .catch(err => alert(err));

    //  this.produtoService.addImagemProduto(produto.id, this.imagem)
    //    .catch(err => {
    //      alert("Erro ao inserir produto: " + err);
    //      this.produtoService.deleteProduto(produto.id);
    //    });
  }

  setMarca(valor){
    this.marca = {id: valor, nome: null};
  }

  setImagem(target: HTMLInputElement){
    let img: File = target.files[0];

    if(img.type != 'image/jpeg' && img.type != 'image/png'){
      alert("Formato de imagem inválido, por favor insira apenas jpeg ou png");
      target.src = "";
      target.files[0] = null;
      return;
    }

    this.imagem = img;
    console.log(this.imagem);
  }


  clean(str: string): string{
    let res = "";
   
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        res += String.fromCharCode(str.charCodeAt(i)+32);
      }
      else if((str.charCodeAt(i) > 32 && str.charCodeAt(i) <= 122) || str.charCodeAt(i) >= 128){
        res += String.fromCharCode(str.charCodeAt(i));
      }
      else if(str.charCodeAt(i) == 32){
        res += "";
      }
      else{
        return null;
      }
    }
    return res;
  }

  isProdutoValid(produto: Produto){
    if(produto.nome.length == 0 || this.clean(produto.nome) == null){
      return false;
    }

    let produtos: Produto[] = [];
    this.produtoService.getAllProdutos()
      .then(res => produtos = res)
      .catch(err => alert(err));

    console.log(produtos.length);
    
    for(let p of produtos){
      if(this.clean(p.nome) == this.clean(produto.nome)){
        return false;
      }
    }

    if(
      produto.marca == null ||
      produto.descricao == null ||
      produto.descricao.length < 1 ||
      produto.categorias.length < 1 ||
      produto.preco == null ||
      produto.preco == 0 ||
      produto.quantidade == null
    ){
      return false;
    }

    return true;
  }
}

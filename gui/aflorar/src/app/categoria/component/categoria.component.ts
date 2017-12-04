import { CategoriaService } from './../service/categoria.service';
import { Categoria } from './../categoria';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  nova_categoria: string;

  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.categoriaService.getAllCategorias()
    .then(res => this.categorias = res)
    .catch(err => alert(err));
  }

  addCategoria(){
    let data = new Categoria;
    data.id = null;
    data.nome = this.nova_categoria;

    if(!this.isCategoriaValid(data.nome)){
      alert("Nome de categoria inválido ou existente");
      return;
    }

    this.categoriaService.addNewCategoria(data)
      .then(res => {
        this.categorias.push(res);
        alert("Categoria criada com sucesso");
      })
      .catch(err => alert(err));
    this.nova_categoria = '';
  }
  
  updateCategoria(categoria: Categoria, valor: string){
    if(!this.isCategoriaValid(valor)){
      alert("Categoria inválida ou existente");
      return;
    }

    let temp = {id: categoria.id, nome: valor}

    this.categoriaService.updateCategoria(temp)
      .then(res => {
        categoria.nome = res.nome;
        alert("Categoria atualizada com sucesso");
      })
      .catch(err => alert(err));
  }

  deleteCategoria(categoria: Categoria){
    if(confirm("Tem certeza que deseja excluir a categoria " + categoria.nome + "?")){
      this.categoriaService.deleteCategoria(categoria.id)
        .then(res => {
          let index = this.categorias.indexOf(categoria);
          this.categorias.splice(index, 1);
          alert("Categoria deletada com sucesso");
        })
        .catch(err => alert(err));
    }
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

  isCategoriaValid(categoriaNome: string){
    if(categoriaNome.length == 0 || this.clean(categoriaNome) == null){
      return false;
    }

    for(let categoria of this.categorias){
      if(this.clean(categoria.nome) == this.clean(categoriaNome)){
        return false;
      }
    }
    return true;
  }

}

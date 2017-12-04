import { url } from './../../global';
import { Produto } from './../produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../global';

@Injectable()
export class ProdutoService {

  private url = global.url + "/produto";

  constructor(
    private http: HttpClient
  ) { }

  getAllProdutos(){
    return this.http.get(this.url + "/get_all")
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  addNewProduto(produto: Produto){
    return this.http.post(this.url + "/new", produto)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  updateProduto(produto: Produto){
    return this.http.put(this.url + "/edit", produto)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  deleteProduto(id: string){
    return this.http.delete(this.url + "/delete/" + id)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  addImagemProduto(produtoId: string, imagem: File){
    return this.http.post(this.url + '/image/' + produtoId, imagem)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.tratarErro);
  }

  private tratarErro(err: any): Promise<any>{
    console.error("Acesso mal sucedido ao serviço de produtos", err);
    return Promise.reject(err.message || err);
  }

}

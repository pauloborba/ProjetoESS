import { Injectable } from '@angular/core';
import * as global from '../../global';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../produto/produto';

@Injectable()
export class HomeClienteService {

  private url = global.url + "/carrinho";

  constructor(
    private http: HttpClient
  ) { }

  adicionarProdutoCarrinho(produto: Produto){
    this.http.post(this.url + "/5a24631710f72e7424728164", produto)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  private tratarErro(err: any): Promise<any>{
    console.error("Acesso mal sucedido ao serviço de carrinho", err);
    return Promise.reject(err.message || err);
  }

}

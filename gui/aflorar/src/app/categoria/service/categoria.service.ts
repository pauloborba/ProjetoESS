import { Categoria } from './../categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../global';

@Injectable()
export class CategoriaService {

  private url = global.url + '/categoria';

  constructor(
    private http: HttpClient
  ) { }

  getAllCategorias(): Promise<Categoria[]>{
    return this.http.get(this.url + '/get_all')
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.tratarErro);
  }

  updateCategoria(categoria: Categoria){
    return this.http.put(this.url + '/edit', categoria)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  addNewCategoria(categoria: Categoria){
    return this.http.post(this.url + '/new', categoria)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  deleteCategoria(categoriaId: string){
    return this.http.delete(this.url + '/delete/' + categoriaId)
      .toPromise()
      .then(res =>{
        return res
      })
      .catch(this.tratarErro);
  }

  private tratarErro(err: any): Promise<any>{
    console.error("Acesso mal sucedido ao serviço de categorias", err);
    return Promise.reject(err.message || err);
  }
}

import { Marca } from './../marca';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../global';

@Injectable()
export class MarcaService {

  private url = global.url + '/marca';

  constructor(
    private http: HttpClient
  ) { }

  getAllMarcas(): Promise<Marca[]>{
    return this.http.get(this.url + '/get_all')
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.tratarErro);
  }

  updateMarca(marca: Marca){
    return this.http.put(this.url + '/edit', marca)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  addNewMarca(marca: Marca){
    return this.http.post(this.url + '/new', marca)
      .toPromise()
      .then(res =>{
        return res;
      })
      .catch(this.tratarErro);
  }

  deleteMarca(marcaId: string){
    return this.http.delete(this.url + '/delete/' + marcaId)
      .toPromise()
      .then(res =>{
        return res
      })
      .catch(this.tratarErro);
  }

  private tratarErro(err: any): Promise<any>{
    console.error("Acesso mal sucedido ao serviço de marcas", err);
    return Promise.reject(err.message || err);
  }
}

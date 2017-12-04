import { Injectable } from '@angular/core';
import { Pais } from '../domain/pais';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as global from '../../../global';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaisService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url: string = global.url + '/pais';

  constructor(private http: HttpClient) { }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }

  criarPais(pais: Pais): Promise<Pais> {
    return this.http.post(this.url + '/novo', {headers: this.headers})
      .toPromise()
      .then(res => {
        if(res){ return pais;} else{ return null;}
      })
      .catch(this.tratarErro);
      
  }

  editarPais(pais: Pais): Promise<Pais>{
    return this.http.put(this.url + '/editar', JSON.stringify(pais))
      .toPromise()
      .then(res => {
        if(res){ return pais; }else{ return null; }
      })
      .catch(this.tratarErro);
  }

  getPais(): Promise<Pais[]> {
    return this.http.get(this.url + '/listarTodos')
      .toPromise()
      .then(res => {
        res as Pais[]
      })
      .catch(this.tratarErro);
  }

}

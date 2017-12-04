import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as global from '../../../global';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url: string = global.url + '/cliente';
  public clienteLogado: Cliente;

  constructor(private http: HttpClient) { }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }
  
  criarCliente(cliente: Cliente): Promise<Cliente> {
    return this.http.post(this.url + '/novo', cliente)
      .toPromise()
      .then(res => {
        if(res){ return cliente; }else{ return null; }
      })
      .catch(this.tratarErro);
  }

  atualizarCliente(cliente: Cliente): Promise<Cliente> {
    return this.http.put(this.url + '/editar', cliente)
      .toPromise()
      .then(res => {
        if(res){ 
          let ress = <Cliente> res;
          this.clienteLogado = new Cliente(); 
          global.setClienteLogado(this.clienteLogado.copy(ress));
          localStorage.setItem("clienteLogado", JSON.stringify(this.clienteLogado.copy(ress))); 
        }
      })
      .catch(this.tratarErro);
  }

  getCliente(): Promise<Cliente[]>{
    return this.http.get(this.url + '/listarTodos')
      .toPromise()
      .then(res => {
        res as Cliente[]
      })
      .catch(this.tratarErro);
  }

}

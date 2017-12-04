import { Injectable } from '@angular/core';
import { Cliente } from '../../cliente/domain/cliente';
import { HttpClient } from '@angular/common/http';
import * as global from '../../../global';
import { clienteLogado } from '../../../global';
import { Carrinho } from '../../cliente/domain/carrinho';

@Injectable()
export class LoginService {

  private url: string = global.url + '/cliente';
  public clienteLogado: Cliente;

  constructor(
    private http: HttpClient
  ) { }

  logarCliente(cliente: Cliente){
    return this.http.post(this.url + '/login', cliente)
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

  criarCliente(cliente: Cliente): Promise<Cliente> {
    cliente.carrinho = new Carrinho();
    return this.http.post(this.url + '/novo', cliente)
      .toPromise()
      .then(res => {
        if(res){ return cliente; }else{ return null; }
      })
      .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }

}

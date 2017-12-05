import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Cliente } from '../cliente/domain/cliente';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private registrando = false;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.limpar();
  }

  logarCliente(){
    if (this.validarClienteLogin()){
      this.loginService.logarCliente(this.cliente);
    }
    else{
      toast("Preencha todos os campos", 1500);
    }
  }

  validarClienteLogin(){
    let retorno = true; 
    if (this.cliente.email == "" || this.cliente.email == null ||
      this.cliente.senha == "" || this.cliente.senha == null ){
      retorno = false;
    }
        return retorno;
  }
  
  registrarCliente(){
    if (this.validarClienteRegistro()){
      this.loginService.criarCliente(this.cliente);
      this.limpar();
      toast("Cadastrado com sucesso", 1500);
    }
    else{
      toast("Preencha todos os campos", 1500);
    }
  }

  validarClienteRegistro(){
    let retorno = true; 
    if (this.cliente.nome == "" || this.cliente.nome == null ||
      this.cliente.cpf == "" || this.cliente.cpf == null ||
      this.cliente.email == "" || this.cliente.email == null ||
      this.cliente.senha == "" || this.cliente.senha == null ){
      retorno = false;
    }
        return retorno;
  }

  limpar(){
    this.cliente = new Cliente();
  }

}

import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../domain/cliente';
import { Endereco } from '../domain/endereco';
import { Pais } from '../../pais/domain/pais';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clientes: Cliente[];
  cpfDuplicado: boolean = false;
  private clienteDomain: Cliente = new Cliente();
  private enderecoDomain: Endereco = new Endereco();
  private paisDomain: Pais = new Pais();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getCliente()
      .then(as => this.clientes = as)
      .catch(erro => alert(erro));
  }

  criarCliente(cliente: Cliente): void{
    cliente.endereco.push(this.enderecoDomain);
    this.clienteService.criarCliente(cliente)
      .then(ab => {
        this.clienteDomain = new Cliente();
        alert("Cadastrado com sucesso");
      })
      .catch(erro => alert(erro));
  }

  duplicado(): void {
    this.cpfDuplicado = false;
  }

}

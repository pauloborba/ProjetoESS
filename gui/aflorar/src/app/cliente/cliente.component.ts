import { Component, OnInit } from '@angular/core';
import { Cliente } from './domain/cliente';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(clienteService: ClienteService) { }

  ngOnInit() {
  }

}

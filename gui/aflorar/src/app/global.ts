import { Cliente } from "./cliente/domain/cliente";

export const url = "http://localhost:8080";

export var clienteLogado: Cliente;

export function setClienteLogado (cliente: Cliente){
    this.clienteLogado = cliente;
}

export function getClienteLogado (){
    return this.clienteLogado;
}
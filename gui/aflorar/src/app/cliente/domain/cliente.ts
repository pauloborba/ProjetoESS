import { Endereco } from "./endereco";
import { Carrinho } from "./carrinho";

export class Cliente {

    id: string;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone: string;
    dataDeNascimento: string;
    administrador: boolean;
    endereco: Endereco[] = []; 
    sexo: string;
    ativo: boolean;

    carrinho: Carrinho = new Carrinho();

    copy(cliente: Cliente){
        console.log(cliente);
        this.id = cliente.id;
        this.nome = cliente.nome;
        this.email = cliente.email;
        this.senha = cliente.senha;
        this.cpf = cliente.cpf;
        this.telefone = cliente.telefone;
        this.dataDeNascimento = cliente.dataDeNascimento;
        this.administrador = cliente.administrador;
        this.endereco = cliente.endereco;
        this.sexo = cliente.sexo;
        this.ativo = cliente.ativo;
        this.carrinho = cliente.carrinho;
        return this;
    }
}

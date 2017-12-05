import { Pais } from "../../pais/domain/pais";

export class Endereco {
    
    id: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    estado: string;
    sigla: string;
    pais: Pais;
}

export class Pais {
    id: string;
    nome: string;

    constructor(){
        this.clean();
    }

    clean(): void {
        this.nome = "";
    }
}

import { MarcaService } from './../service/marca.service';
import { Marca } from './../marca';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  nova_marca: string;

  marcas: Marca[];

  constructor(
    private marcaService: MarcaService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.marcaService.getAllMarcas()
    .then(res => this.marcas = res)
    .catch(err => alert(err));
  }

  addMarca(){
    let data = new Marca;
    data.id = null;
    data.nome = this.nova_marca;

    if(!this.isMarcaValid(data.nome)){
      alert("Nome de marca inválido ou existente");
      return;
    }

    this.marcaService.addNewMarca(data)
      .then(res => {
        this.marcas.push(res);
        alert("Marca criada com sucesso");
      })
      .catch(err => alert(err));
    this.nova_marca = '';
  }
  
  updateMarca(marca: Marca, valor: string){
    if(!this.isMarcaValid(valor)){
      alert("Marca inválida ou existente");
      return;
    }

    let temp = {id: marca.id, nome: valor}

    this.marcaService.updateMarca(temp)
      .then(res => {
        marca.nome = res.nome;
        alert("Marca atualizada com sucesso");
      })
      .catch(err => alert(err));
  }

  deleteMarca(marca: Marca){
    if(confirm("Tem certeza que deseja excluir a marca " + marca.nome + "?")){
      this.marcaService.deleteMarca(marca.id)
        .then(res => {
          let index = this.marcas.indexOf(marca);
          this.marcas.splice(index, 1);
          alert("Marca deletada com sucesso");
        })
        .catch(err => alert(err));
    }
  }

  clean(str: string): string{
    let res = "";
   
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        res += String.fromCharCode(str.charCodeAt(i)+32);
      }
      else if((str.charCodeAt(i) > 32 && str.charCodeAt(i) <= 122) || str.charCodeAt(i) >= 128){
        res += String.fromCharCode(str.charCodeAt(i));
      }
      else if(str.charCodeAt(i) == 32){
        res += "";
      }
      else{
        return null;
      }
    }
    return res;
  }

  isMarcaValid(marcaNome: string){
    if(marcaNome.length == 0 || this.clean(marcaNome) == null){
      return false;
    }

    for(let marca of this.marcas){
      if(this.clean(marca.nome) == this.clean(marcaNome)){
        return false;
      }
    }
    return true;
  }

}

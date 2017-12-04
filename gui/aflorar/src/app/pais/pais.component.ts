import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { PaisService } from './service/pais.service';
import { Pais } from './domain/pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  paises: Pais[];
  nomeDuplicado: boolean = false;
  private  paisDomain: Pais = new Pais();
  
  constructor(private paisService: PaisService) { }
  
  ngOnInit(): void {
    this.paisService.getPais()
    .then(as => this.paises = as)
    .catch(erro => alert(erro));
    
  }

  criarPais(pais: Pais): void{
    this.paisService.criarPais(pais)
      .then(ab => {
        alert("Cadastrado com sucesso");
        this.paisDomain = new Pais;
      })
      .catch(erro => alert(erro));
  }

  duplicado(): void {
    this.nomeDuplicado = false;
  }

}

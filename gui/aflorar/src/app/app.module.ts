import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoClienteComponent } from './produto-cliente/produto-cliente.component';

const appRoutes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produto', component: ProdutoClienteComponent },
//  { path: 'produtos', component: ProdutoComponent },
//  { path: 'produtos/novo', component: ProdutoFormComponent },
 // { path: 'categorias', component: CategoriaComponent },
 // { path: 'marcas', component: MarcaComponent },
  { path: '**', component: ProdutoClienteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    NavbarComponent,
    ProdutoClienteComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

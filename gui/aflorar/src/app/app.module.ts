import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/component/produto.component';
import { MarcaComponent } from './marca/component/marca.component';
import { CategoriaComponent } from './categoria/component/categoria.component';
import { ProdutoService } from './produto/service/produto.service';
import { CategoriaService } from './categoria/service/categoria.service';
import { MarcaService } from './marca/service/marca.service';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { DashboardComponent } from './dashboard/component/dashboard.component';
import { NavBarComponent } from './nav-bar/component/nav-bar.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { HomeClienteService } from './home-cliente/service/home-cliente.service';

import { ClienteComponent } from './cliente/cliente.component';
import { PaisComponent } from './pais/pais.component';
import { ClienteService } from './cliente/service/cliente.service';
import { PaisService } from './pais/service/pais.service';

import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

import { LoginComponent } from './login/login.component';

import { LoginService } from './login/service/login.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'marcas', component: MarcaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeClienteComponent  },
  { path: 'cliente', component: ClienteComponent },
  { path: 'adicionar', component: ClienteFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrinho', component: CarrinhoComponent }
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    MarcaComponent,
    CategoriaComponent,
    ProdutoFormComponent,
    DashboardComponent,
    NavBarComponent,
    HomeClienteComponent,
    ClienteComponent,
    PaisComponent,
    ClienteFormComponent,
    LoginComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    ProdutoService,
    MarcaService,
    CategoriaService,
    HomeClienteService,
    ClienteService,
    PaisService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

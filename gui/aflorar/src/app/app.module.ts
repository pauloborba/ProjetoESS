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

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'marcas', component: MarcaComponent },
  { path: 'dashboard', component: DashboardComponent },
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

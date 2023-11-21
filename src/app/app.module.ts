// Importações necessárias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service'; 
import { ControleLivrosService } from './controle-livros.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Importe seus serviços e componentes aqui

// Defina as rotas
const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }, // Rota padrão redireciona para 'lista'
];

@NgModule({
  declarations: [
    // Declare seus componentes aqui
    LivroListaComponent,
    LivroDadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    // Adicione seus serviços aqui
    ControleEditoraService,
    ControleLivrosService,
  ],

  bootstrap: [AppComponent]

})
export class AppModule {
    ngDoBootstrap() {}
}

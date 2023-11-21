import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    // Preencha os vetores editoras e livros aqui
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number): void {
    // Implemente a lógica de exclusão aqui
    this.servLivros.excluir(codigo);
    // Atualize o vetor livros após a exclusão
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    const editora = this.servEditora.getEditoras().find(e => e.codEditora === codEditora);
  
    // Verifique se a editora foi encontrada antes de retornar o nome
    return editora ? editora.nome : '';
  }
}

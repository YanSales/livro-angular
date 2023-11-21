import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []);
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    // Carregue as editoras disponíveis ao iniciar o componente
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    // Preencha a lógica de inclusão aqui
    const novoLivro: Livro = {
      codigo: 0,
      codEditora: 1,
      titulo: 'Novo Livro',
      resumo: 'Resumo do Novo Livro',
      autores: ['Autor 1', 'Autor 2']
    };

    this.servLivros.incluir(novoLivro);
    // Atualize o vetor livro após a inclusão
    this.livro = this.servLivros.obterLivros()[0];
  }
}

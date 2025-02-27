import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  projetos = [
    { nome: 'Projeto 1', descricao: 'Descrição do Projeto 1', link: 'https://github.com/seu-usuario/projeto1' },
    { nome: 'Projeto 2', descricao: 'Descrição do Projeto 2', link: 'https://github.com/seu-usuario/projeto2' },
  ];
}
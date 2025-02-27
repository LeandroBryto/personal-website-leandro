import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  projetos = [
    {
      nome: 'Portfólio Pessoal',
      descricao: 'Meu site pessoal desenvolvido com Angular 17, destacando minhas habilidades e projetos.',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      data: 'Fevereiro 2025',
      status: 'Em andamento',
      link: 'https://github.com/LeandroBryto/personal-website-leandro',
    },
    {
      nome: 'Microsserviços Spring Boot - Ecommerce Microservices Primavera',
      descricao: 'Projeto composto por dois microsserviços principais: User Service e Email Service. O objetivo é gerenciar usuários e enviar e-mails de confirmação usando RabbitMQ para comunicação e SMTP para envio de e-mails.',
      tecnologias: [
        'Spring Boot',
        'Spring Data JPA',
        'RabbitMQ',
        'Spring Validation',
        'Swagger',
        'MySQL',
        'Slf4j / Logback',
        'Spring Mail',
        'JavaMailSender'
      ],
      data: 'Janeiro 2025',
      status: 'Concluído',
      link: 'https://github.com/LeandroBryto/microservices-spring-boot'
    },
    {
      nome: 'Desafio Backend do BTG Pactual',
      descricao: 'Projeto desenvolvido como parte do desafio técnico do BTG Pactual, utilizando tecnologias modernas para implementação de uma API robusta e escalável.',
      tecnologias: [
        'Java 21',
        'Spring Boot',
        'Spring Data MongoDB',
        'RabbitMQ',
        'Docker'
      ],
      data: 'Janeiro 2025',
      status: 'Concluído',
      link: 'https://github.com/LeandroBryto/orderms'
    }
  ];
  
}
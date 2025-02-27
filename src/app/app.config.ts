import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Para requisições HTTP

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configura as rotas
    provideHttpClient(), // Habilita o HttpClient
  ],
};
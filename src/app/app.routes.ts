import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }, // Rota padrão para páginas não encontradas
];
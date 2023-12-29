// Importa o tipo 'Routes' do módulo '@angular/router'
import { Routes } from '@angular/router';

// Importa os componentes relacionados às rotas
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';

// Define uma constante 'routeConfig' que contém a configuração das rotas
const routeConfig: Routes = [
  // Rota para a página inicial ('/') com o componente 'HomeComponent' associado
  {
    path: '',
    component: HomeComponent,
    title: 'Home page', // Título associado à rota (opcional)
  },
  // Rota para detalhes de uma casa usando o ID como parâmetro ('details/:id')
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details', // Título associado à rota (opcional)
  },
];

// Exporta a constante 'routeConfig' para ser utilizada no arquivo de configuração de rotas
export default routeConfig;

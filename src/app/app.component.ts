// Importa o decorador 'Component' do módulo '@angular/core'
import { Component } from '@angular/core';

// Importa o componente 'HomeComponent' e o módulo 'RouterModule' para configuração de rotas
import { HomeComponent } from '../app/components/home/home.component';
import { RouterModule } from '@angular/router';

// Decora a classe 'AppComponent' como um componente Angular
@Component({
  // Seletor CSS para incorporar o componente no HTML
  selector: 'app-root',
  // Propriedade 'standalone' definida como verdadeira (opcional)
  standalone: true,
  // Módulos importados para uso no componente
  imports: [HomeComponent, RouterModule],
  // Template HTML associado ao componente
  template: `
    <main>
      <!-- Link de rota para a rota padrão '/' -->
      <a [routerLink]="['/']">
        <!-- Cabeçalho com o nome da marca e logo -->
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <!-- Local onde os componentes associados às rotas serão exibidos -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  // Folhas de estilo associadas ao componente
  styleUrls: ['./app.component.css'],
})

// Classe que representa o componente 'AppComponent'
export class AppComponent {
  // Propriedade 'title' do componente
  title = 'homes';
}

// Importa os decoradores e módulos necessários do Angular
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housingLocation';
import { HousingService } from '../../service/housing.service';

// Decora a classe 'HomeComponent' como um componente Angular
@Component({
  // Seletor CSS para incorporar o componente no HTML
  selector: 'app-home',
  // Propriedade 'standalone' definida como verdadeira (opcional)
  standalone: true,
  // Módulos importados para uso no componente
  imports: [CommonModule, HousingLocationComponent],
  // Template HTML associado ao componente
  template: `
    <!-- Seção de formulário para filtrar por cidade -->
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>

    <!-- Seção de resultados com componentes 'HousingLocation' exibidos dinamicamente -->
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  // Folha de estilos associada ao componente
  styleUrl: './home.component.css',
})

// Classe que representa o componente 'HomeComponent'
export class HomeComponent {
  // Lista de todas as localizações de habitação
  housingLocationList: HousingLocation[] = [];
  // Instância do serviço 'HousingService' para obter dados
  housingService: HousingService = inject(HousingService);
  // Lista filtrada de localizações de habitação com base no filtro de cidade
  filteredLocationList: HousingLocation[] = [];

  // Construtor da classe 'HomeComponent'
  constructor() {
    // Chama o serviço para obter todas as localizações de habitação
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        // Atribui as localizações obtidas às listas de localizações
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  // Método para filtrar as localizações com base no texto fornecido
  filterResults(text: string) {
    // Se o texto estiver vazio, exibe todas as localizações
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    // Filtra as localizações com base no texto fornecido (ignora maiúsculas/minúsculas)
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

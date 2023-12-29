// Importa os decoradores e módulos necessários do Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../interfaces/housingLocation';
import { RouterLink } from '@angular/router';

// Decora a classe 'HousingLocationComponent' como um componente Angular
@Component({
  // Seletor CSS para incorporar o componente no HTML
  selector: 'app-housing-location',
  // Propriedade 'standalone' definida como verdadeira (opcional)
  standalone: true,
  // Módulos importados para uso no componente
  imports: [CommonModule, RouterLink],
  // Template HTML associado ao componente
  template: `
    <!-- Seção contendo os detalhes da localização de habitação -->
    <section class="listing">
      <!-- Foto da localização de habitação -->
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <!-- Título da localização de habitação -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <!-- Localização da localização de habitação (cidade, estado) -->
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <!-- Link para detalhes da localização de habitação usando roteamento -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  // Folha de estilos associada ao componente
  styleUrl: './housing-location.component.css',
})

// Classe que representa o componente 'HousingLocationComponent'
export class HousingLocationComponent {
  // Propriedade de entrada 'housingLocation' do tipo 'HousingLocation'
  @Input() housingLocation!: HousingLocation;
}

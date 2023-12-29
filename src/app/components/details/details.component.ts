// Importa os decoradores e módulos necessários do Angular
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../service/housing.service';
import { HousingLocation } from '../../interfaces/housingLocation';

// Decora a classe 'DetailsComponent' como um componente Angular
@Component({
  // Seletor CSS para incorporar o componente no HTML
  selector: 'app-details',
  // Propriedade 'standalone' definida como verdadeira (opcional)
  standalone: true,
  // Módulos importados para uso no componente
  imports: [CommonModule, ReactiveFormsModule],
  // Template HTML associado ao componente
  template: `
    <!-- Artigo contendo detalhes da localização de habitação -->
    <article>
      <!-- Foto da localização de habitação -->
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <!-- Seção de descrição da localização de habitação -->
      <section class="listing-description">
        <!-- Título da localização de habitação -->
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <!-- Localização da localização de habitação (cidade, estado) -->
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <!-- Seção de características da localização de habitação -->
      <section class="listing-features">
        <!-- Título da seção -->
        <h2 class="section-heading">About this housing location</h2>
        <!-- Lista de características -->
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <!-- Seção de aplicação para morar na localização -->
      <section class="listing-apply">
        <!-- Título da seção -->
        <h2 class="section-heading">Apply now to live here</h2>
        <!-- Formulário de inscrição -->
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <!-- Campos do formulário -->
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <!-- Botão de envio do formulário -->
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  // Folha de estilos associada ao componente
  styleUrl: './details.component.css',
})

// Classe que representa o componente 'DetailsComponent'
export class DetailsComponent {
  // Serviço de rota para acessar parâmetros da rota
  route: ActivatedRoute = inject(ActivatedRoute);
  // Instância do serviço 'HousingService' para obter dados
  housingService = inject(HousingService);
  // Informações da localização de habitação exibida
  housingLocation: HousingLocation | undefined;

  // Formulário de inscrição com campos 'firstName', 'lastName' e 'email'
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  // Construtor da classe 'DetailsComponent'
  constructor() {
    // Obtém o ID da localização de habitação da rota
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    // Chama o serviço para obter os detalhes da localização de habitação
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        // Atribui os detalhes obtidos à propriedade 'housingLocation'
        this.housingLocation = housingLocation;
      });
  }

  // Método para enviar a aplicação para morar na localização
  submitApplication() {
    // Chama o método 'submitApplication' do serviço com os valores do formulário
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}

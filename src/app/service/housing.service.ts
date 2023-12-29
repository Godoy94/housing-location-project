// Importa o decorador 'Injectable' do módulo '@angular/core'
import { Injectable } from '@angular/core';
// Importa a interface 'HousingLocation' do arquivo '../interfaces/housingLocation'
import { HousingLocation } from '../interfaces/housingLocation';

// Decora a classe 'HousingService' como um serviço Angular, configurando sua injeção de dependência no root
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // Construtor da classe 'HousingService'
  constructor() {}

  // Método assíncrono para obter todas as localizações de habitação
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    // Faz uma requisição assíncrona para a URL especificada e aguarda a resposta
    const data = await fetch(this.url);
    // Retorna os dados convertidos para JSON, ou um array vazio se a resposta for nula
    return (await data.json()) ?? [];
  }

  // Método assíncrono para obter uma localização de habitação por ID
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    // Faz uma requisição assíncrona para a URL específica com o ID e aguarda a resposta
    const data = await fetch(`${this.url}/${id}`);
    // Retorna os dados convertidos para JSON, ou um objeto vazio se a resposta for nula
    return (await data.json()) ?? {};
  }

  // Método para enviar uma aplicação de habitação
  submitApplication(firstName: string, lastName: string, email: string) {
    // Registra no console os detalhes da aplicação recebida
    console.log(
      `Homes application received: firstName ${firstName} lastName: ${lastName} email ${email}`
    );
  }

  // URL da API para as localizações de habitação
  url = 'http://localhost:3000/locations';
}

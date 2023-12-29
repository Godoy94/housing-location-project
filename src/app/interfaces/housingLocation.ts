// Declaração de uma interface 'HousingLocation' que representa a estrutura de uma localização de habitação
export interface HousingLocation {
  // Propriedade 'id' do tipo número
  id: number;
  // Propriedade 'name' do tipo string
  name: string;
  // Propriedade 'city' do tipo string
  city: string;
  // Propriedade 'state' do tipo string
  state: string;
  // Propriedade 'photo' do tipo string (URL da foto)
  photo: string;
  // Propriedade 'availableUnits' do tipo número
  availableUnits: number;
  // Propriedade 'wifi' do tipo booleano
  wifi: boolean;
  // Propriedade 'laundry' do tipo booleano
  laundry: boolean;
}

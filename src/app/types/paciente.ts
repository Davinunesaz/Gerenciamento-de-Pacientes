export interface Patient {
  id: number;
  nome: string;
  idade: number;
  descricao?: 'Internado' | 'Liberado' | 'Em Análise';
}
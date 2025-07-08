export interface Patient {
  id: number;
  nome: string;
  idade: number;
  status: 'internado' | 'liberado' | 'aguardando';
}
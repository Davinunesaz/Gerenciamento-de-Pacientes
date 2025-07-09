import { Patient } from "../types/paciente";

export default function PatientCard({ paciente }: { paciente: Patient }) {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{paciente.nome}</h3>
      <p className="text-gray-600">Idade: {paciente.idade}</p>
      <span className="text-sm uppercase text-blue-500">{paciente.descricao}</span>
    </div>
  );
}

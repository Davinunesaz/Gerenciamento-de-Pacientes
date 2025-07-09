import { useState } from "react";
import { Patient } from "../types/paciente";

interface Props {
  onClose: () => void;
  onAdd: (paciente: Patient) => void;
}

export default function NewPatientForm({ onClose, onAdd }: Props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState<"Internado" | "Liberado" | "Em Análise">("Internado");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !idade || !descricao) return alert("Preencha todos os campos");

    const novoPaciente: Patient = {
      id: Date.now(),
      nome,
      idade: Number(idade),
      descricao,
    };

    onAdd(novoPaciente);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Cadastrar Novo Paciente</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
          min={0}
        />
        <select
          value={descricao}
          onChange={(e) => setDescricao(e.target.value as "Internado" | "Liberado" | "Em Análise")}
          className="w-full p-2 mb-5 border rounded"
        >
          <option value="Internado">Internado</option>
          <option value="Liberado">Liberado</option>
          <option value="Em Análise">Em Análise</option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

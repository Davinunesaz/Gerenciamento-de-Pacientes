import PatientCard from "./PatientCard";
import { Patient } from "../types/paciente";

interface SectionProps {
  id: string;
  title: string;
  status?: 'Internado' | 'Liberado' | 'Em Análise';
  pacientes: Patient[];
}

export default function Section({ id, title, pacientes }: SectionProps) {
  return (
    <section id={id} className="py-16 px-4 sm:px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pacientes.map((p) => (
          <PatientCard key={p.id} paciente={p} />
        ))}
      </div>
    </section>
  );
}

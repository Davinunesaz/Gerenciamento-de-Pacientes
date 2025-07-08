"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Section from "./components/Section";
import { Patient } from "./types/paciente"; 

export default function Home() {
  const [internados, setInternados] = useState<Patient[]>([]);
  const [liberados, setLiberados] = useState<Patient[]>([]);
  const [aguardando, setAguardando] = useState<Patient[]>([]);

  useEffect(() => {
    fetch("/api/pacientes/internados").then(res => res.json()).then(setInternados);
    fetch("/api/pacientes/liberados").then(res => res.json()).then(setLiberados);
    fetch("/api/pacientes/aguardando").then(res => res.json()).then(setAguardando);
  }, []);

  return (
    <main className="scroll-smooth font-sans">
      <Navbar />
      <div className="pt-24">
        <Section id="internados" title="Pacientes Internados" pacientes={internados} />
        <Section id="liberados" title="Pacientes Liberados" pacientes={liberados} />
        <Section id="aguardando" title="Pacientes Aguardando Atendimento" pacientes={aguardando} />
      </div>
    </main>
  );
}

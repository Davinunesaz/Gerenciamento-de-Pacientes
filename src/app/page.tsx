"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Section from "./components/Section";
import { Patient } from "./types/paciente";

export default function Home() {
  const [internados, setInternados] = useState<Patient[]>([]);
  const [liberados, setLiberados] = useState<Patient[]>([]);
  const [aguardando, setAguardando] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const [resInternado, resLiberado, resAguardando] = await Promise.all([
          fetch("https://api-gerenciamento-de-paciente.onrender.com/api/internado"),
          fetch("https://api-gerenciamento-de-paciente.onrender.com/api/liberado"),
          fetch("https://api-gerenciamento-de-paciente.onrender.com/api/Analise"),
        ]);

        const dataInternado = await resInternado.json();
        const dataLiberado = await resLiberado.json();
        const dataAguardando = await resAguardando.json();

        
      console.log("Internados:", dataInternado);
      console.log("Liberados:", dataLiberado);
      console.log("Aguardando:", dataAguardando);

        // Corrigido: acesso ao campo .pacientes
       setInternados(Array.isArray(dataInternado.filtroInternado) ? dataInternado.filtroInternado : []);
      setLiberados(Array.isArray(dataLiberado.filtroLiberado) ? dataLiberado.filtroLiberado : []);
      setAguardando(Array.isArray(dataAguardando.filtroAnalise) ? dataAguardando.filtroAnalise : []);

      } catch (err) {
        console.error("Erro ao buscar pacientes:", err);
        setInternados([]);
        setLiberados([]);
        setAguardando([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPacientes();
  }, []);

  if (loading) {
    return (
      <main className="h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Carregando pacientes...</p>
      </main>
    );
  }

  

  return (
    <main className="scroll-smooth font-sans">
      <Navbar />
      <div className="pt-24">
        <Section id="internados" title="Pacientes Internados" pacientes={internados} />
        <Section id="liberados" title="Pacientes Liberados" pacientes={liberados} />
        <Section id="em-analise" title="Pacientes Em Análise" pacientes={aguardando} />
      </div>
    </main>
  );
}

import React from 'react';
import { Database, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export const Pilares: React.FC = () => {
  const pilares = [
    {
      id: 'datos-negocios',
      icon: Database,
      title: 'Datos & Negocios',
      tag: 'SQL · EXCEL AVANZADO',
      tagColor: 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30',
      description: 'Control de costos, inventarios, presupuestos y modelado de bases de datos relacionales.',
      microWidgets: [
        { label: 'Relational DBs', value: 'PostgreSQL / SQL' },
        { label: 'Excel Modelado', value: 'Costos & Inventario' },
        { label: 'Enfoque', value: 'ROI & Eficiencia' },
      ],
      accentGlow: 'from-[#06B6D4]/20 to-transparent',
    },
    {
      id: 'desarrollo-codigo',
      icon: Code2,
      title: 'Desarrollo & Código',
      tag: 'PYTHON · ASTRO · TS',
      tagColor: 'text-[#2563EB] bg-[#2563EB]/10 border-[#2563EB]/30',
      description: 'Plataformas web rápidas, estructuradas y conectadas a bases de datos en la nube.',
      microWidgets: [
        { label: 'Backend / Logic', value: 'Python / Node.js' },
        { label: 'Frontend Moderno', value: 'Astro / React / TS' },
        { label: 'Cloud Data', value: 'Supabase / Firebase' },
      ],
      accentGlow: 'from-[#2563EB]/20 to-transparent',
    },
    {
      id: 'investigacion-liderazgo',
      icon: Cpu,
      title: 'Investigación & Liderazgo',
      tag: 'WUJU · STARTUPSTEM',
      tagColor: 'text-[#6366F1] bg-[#6366F1]/10 border-[#6366F1]/30',
      description: 'Cofundadora de WUJU y finalista en StartupSTEM 2026 liderando equipos técnicos y pitch.',
      microWidgets: [
        { label: 'Hackathon', value: '24h Cursor Lead' },
        { label: 'Pitch STEM', value: 'Finalista 2026' },
        { label: 'Coordinación', value: 'Metodología Ágil' },
      ],
      accentGlow: 'from-[#6366F1]/20 to-transparent',
    },
  ];

  return (
    <section id="pilares" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4]">
                Enfoque Profesional
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Pilares de Especialización
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] mt-2 md:mt-0">
            Arquitectura de 3 dimensiones: Lógica, Finanzas y Liderazgo
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((pilar) => {
            const Icon = pilar.icon;
            return (
              <div
                key={pilar.id}
                className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle top corner gradient */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${pilar.accentGlow} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div>
                  {/* Top: Icon & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="p-3 rounded-xl bg-[#040814] border border-[#38bdf8]/20 group-hover:border-[#06B6D4] transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      <Icon className="w-5 h-5 text-[#06B6D4]" />
                    </div>
                    <span
                      className={`text-[11px] font-mono px-3 py-1 rounded-full border ${pilar.tagColor} tracking-wider font-semibold`}
                    >
                      {pilar.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#06B6D4] transition-colors">
                    {pilar.title}
                  </h3>

                  {/* Description: Strictly 2 lines max */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-2">
                    {pilar.description}
                  </p>
                </div>

                {/* Bottom Micro-widgets inside card */}
                <div className="mt-6 pt-5 border-t border-[#38bdf8]/10 space-y-2">
                  {pilar.microWidgets.map((widget, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[#040814]/60 border border-[#38bdf8]/10"
                    >
                      <span className="text-[#94A3B8] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#06B6D4]" />
                        {widget.label}
                      </span>
                      <span className="text-[#F8FAFC] font-semibold">{widget.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

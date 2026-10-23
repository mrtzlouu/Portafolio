import React, { useState } from 'react';
import type { CuencaTab } from '../../types';
import { Users, Activity, Map, ShieldCheck, Gauge } from 'lucide-react';

export const CuencaOSDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CuencaTab>('Datos');

  const tabData: Record<
    CuencaTab,
    {
      icon: React.ElementType;
      kpis: { label: string; value: string; percent: number }[];
      statusText: string;
      statusColor: string;
      subtext: string;
    }
  > = {
    Personas: {
      icon: Users,
      kpis: [
        { label: 'Comunidades Monitoreadas', value: '48+ Zonas', percent: 84 },
        { label: 'Cobertura Alerta Temprana', value: '94.6%', percent: 95 },
        { label: 'Población con Acceso a Datos', value: '120k+ Hab', percent: 78 },
      ],
      statusText: 'Red Comunitaria Activa',
      statusColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
      subtext: 'Alertas en tiempo real para comunidades vulnerables ante desbordamientos.',
    },
    Datos: {
      icon: Activity,
      kpis: [
        { label: 'Sensores e Ingesta Hídrica', value: '142 Puntos', percent: 92 },
        { label: 'Frecuencia de Muestreo', value: '< 1.4s', percent: 96 },
        { label: 'Integridad del Dataset', value: '99.8%', percent: 99 },
      ],
      statusText: 'Flujo de Datos Normal',
      statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
      subtext: 'Estructuración y limpieza de registros hidrológicos multivariables.',
    },
    Territorio: {
      icon: Map,
      kpis: [
        { label: 'Cuencas Hidrográficas Mapeadas', value: '18 Cuencas CA', percent: 88 },
        { label: 'Monitoreo de Estrés Hídrico', value: '31% Zonas', percent: 68 },
        { label: 'Resolución Geoespacial', value: 'Vectorial / 10m', percent: 94 },
      ],
      statusText: 'Cartografía Georreferenciada',
      statusColor: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10',
      subtext: 'Capas territoriales e identificación satelital de zonas vulnerables.',
    },
    Soluciones: {
      icon: ShieldCheck,
      kpis: [
        { label: 'Protocolos de Mitigación', value: '12 Automatizados', percent: 100 },
        { label: 'Modelos de Proyección', value: '96.2% Precisión', percent: 96 },
        { label: 'Reducción en Tiempo de Reacción', value: '-42% Minutos', percent: 85 },
      ],
      statusText: 'Estrategia Preventiva',
      statusColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
      subtext: 'Algoritmos para optimizar la toma de decisiones ante emergencias hídricas.',
    },
  };

  const tabs: CuencaTab[] = ['Personas', 'Datos', 'Territorio', 'Soluciones'];
  const current = tabData[activeTab];

  return (
    <div className="mt-4 rounded-xl bg-[#040814]/90 border border-[#38bdf8]/18 p-4 font-mono">
      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#38bdf8]/15">
        <div className="flex items-center gap-1.5 text-xs text-[#06B6D4]">
          <Gauge className="w-4 h-4" />
          <span className="font-bold tracking-wider uppercase text-[11px]">Micro-Dashboard Hídrico</span>
        </div>
        <div className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${current.statusColor}`}>
          {current.statusText}
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 my-3">
        {tabs.map((tab) => {
          const TabIcon = tabData[tab].icon;
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs transition-all ${
                isActive
                  ? 'bg-[#2563EB]/25 text-[#06B6D4] border border-[#06B6D4]/50 shadow-[0_0_12px_rgba(6,182,212,0.2)] font-semibold'
                  : 'bg-[#0A1329] text-[#94A3B8] hover:text-white hover:bg-[#0F1D3D] border border-transparent'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{tab}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Metrics & Progress Bars */}
      <div className="space-y-2.5 my-3">
        {current.kpis.map((kpi, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-[#94A3B8] truncate mr-2">{kpi.label}</span>
              <span className="text-[#F8FAFC] font-bold text-xs">{kpi.value}</span>
            </div>
            {/* Visual Progress Bar */}
            <div className="h-1.5 w-full bg-[#0F1D3D] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                style={{ width: `${kpi.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Context Subtext (1 short line) */}
      <div className="pt-2 border-t border-[#38bdf8]/10 text-[10px] text-[#94A3B8] flex items-center justify-between">
        <span className="truncate">{current.subtext}</span>
        <span className="text-[#06B6D4] font-semibold shrink-0 ml-2">Live Demo</span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Terminal, CheckCircle2, Zap } from 'lucide-react';

export const WujuDashboard: React.FC = () => {
  const [stage, setStage] = useState<'ideacion' | 'sprint' | 'pitch'>('sprint');

  const stageData = {
    ideacion: {
      title: 'Fase 1: Alcance & Arquitectura',
      status: 'Validado',
      metrics: [
        { label: 'Definición de Requisitos', value: '100% Cerrado', progress: 100 },
        { label: 'Modelado de Flujo de Usuario', value: '4 Arquetipos', progress: 85 },
        { label: 'Viabilidad Tecnológica', value: 'Score 9.8/10', progress: 98 },
      ],
      log: 'Investigación de impacto tecnológico local en El Salvador completada.',
    },
    sprint: {
      title: 'Fase 2: Maratón 24h Cursor Buildathon',
      status: 'Completado 24h',
      metrics: [
        { label: 'Tiempo de Sprint Continuo', value: '24h / 24h', progress: 100 },
        { label: 'Eficiencia IA con Cursor', value: '+3.4x Velocidad', progress: 94 },
        { label: 'Commits & Despliegues', value: '42 Deploys OK', progress: 90 },
      ],
      log: 'Coordinación técnica ininterrumpida y arquitectura web modular.',
    },
    pitch: {
      title: 'Fase 3: Demo & Presentación',
      status: 'Defensa Exitosa',
      metrics: [
        { label: 'Feedback de Innovación', value: '95% Positivo', progress: 95 },
        { label: 'Estabilidad de la Demo', value: 'Cero Latencia', progress: 100 },
        { label: 'Continuidad de Proyecto', value: 'Comunidad WUJU', progress: 92 },
      ],
      log: 'Presentación ejecutiva ante evaluadores y comunidad tech.',
    },
  };

  const current = stageData[stage];

  return (
    <div className="mt-4 rounded-xl bg-[#040814]/90 border border-[#38bdf8]/18 p-4 font-mono">
      {/* Interactive Micro-Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#38bdf8]/15">
        <div className="flex items-center gap-1.5 text-xs text-[#06B6D4]">
          <Terminal className="w-4 h-4" />
          <span className="font-bold tracking-wider uppercase text-[11px]">24h Buildathon Telemetry</span>
        </div>
        <div className="text-[10px] px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#06B6D4]" />
          <span>{current.status}</span>
        </div>
      </div>

      {/* Stage Selector */}
      <div className="grid grid-cols-3 gap-1.5 my-3">
        {(['ideacion', 'sprint', 'pitch'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStage(s)}
            className={`py-1.5 px-2 rounded-lg text-xs capitalize transition-all ${
              stage === s
                ? 'bg-[#2563EB]/25 text-[#06B6D4] border border-[#06B6D4]/50 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'bg-[#0A1329] text-[#94A3B8] hover:text-white hover:bg-[#0F1D3D] border border-transparent'
            }`}
          >
            {s === 'ideacion' ? 'Ideación' : s === 'sprint' ? 'Sprint 24h' : 'Pitch'}
          </button>
        ))}
      </div>

      {/* Stage Metrics */}
      <div className="space-y-2.5 my-3">
        {current.metrics.map((metric, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-[#94A3B8] flex items-center gap-1 truncate mr-2">
                <CheckCircle2 className="w-3 h-3 text-[#06B6D4] shrink-0" />
                {metric.label}
              </span>
              <span className="text-[#F8FAFC] font-bold text-xs">{metric.value}</span>
            </div>
            <div className="h-1.5 w-full bg-[#0F1D3D] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                style={{ width: `${metric.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Terminal log message */}
      <div className="pt-2 border-t border-[#38bdf8]/10 text-[10px] text-[#94A3B8] flex items-center justify-between">
        <span className="truncate">{current.log}</span>
        <span className="text-emerald-400 font-semibold shrink-0 ml-2">Build: Verified</span>
      </div>
    </div>
  );
};

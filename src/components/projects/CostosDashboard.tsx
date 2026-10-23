import React, { useState } from 'react';
import type { FinMode } from '../../types';
import { TrendingUp, DollarSign, Layers, PieChart } from 'lucide-react';

export const CostosDashboard: React.FC = () => {
  const [mode, setMode] = useState<FinMode>('optimizado');

  const scenarioData: Record<
    FinMode,
    {
      title: string;
      costos: { label: string; value: string; percent: number; delta: string };
      inventarios: { label: string; value: string; percent: number; delta: string };
      margenes: { label: string; value: string; percent: number; delta: string };
      summary: string;
    }
  > = {
    real: {
      title: 'Datos Operativos Base (Histórico)',
      costos: { label: 'Variación Presupuestaria', value: '$8,420 / mes', percent: 76, delta: '-4.2%' },
      inventarios: { label: 'Precisión de Stock en Bodega', value: '92.4%', percent: 92, delta: 'Base' },
      margenes: { label: 'Margen Bruto de Alimentos', value: '28.5%', percent: 65, delta: '+1.8%' },
      summary: 'Línea base registrada antes de auditoría y automatización contable.',
    },
    optimizado: {
      title: 'Modelo Optimizado (Excel + Costos)',
      costos: { label: 'Reducción de Merma y Desperdicio', value: '-18.5%', percent: 89, delta: 'Ahorro' },
      inventarios: { label: 'Rotación de Inventarios (FIFO)', value: '99.1% Conforme', percent: 99, delta: '+7.3%' },
      margenes: { label: 'Margen Operativo Ajustado', value: '34.8%', percent: 88, delta: '+6.3%' },
      summary: 'Dirección financiera con conciliación y costeo estándar por lote.',
    },
    proyeccion: {
      title: 'Escenario de Crecimiento & Presupuesto',
      costos: { label: 'Control de Costos Fijos/Variables', value: 'Ratio 1:3.2', percent: 94, delta: 'Estable' },
      inventarios: { label: 'Capacidad de Reabastecimiento', value: '3.5 Días', percent: 95, delta: '-30% Tiempo' },
      margenes: { label: 'Margen Neto Proyectado', value: '38.2%', percent: 95, delta: '+9.7%' },
      summary: 'Plan presupuestario con fórmulas dinámicas en Excel avanzado.',
    },
  };

  const current = scenarioData[mode];

  return (
    <div className="mt-4 rounded-xl bg-[#040814]/90 border border-[#38bdf8]/18 p-4 font-mono">
      {/* Micro-Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#38bdf8]/15">
        <div className="flex items-center gap-1.5 text-xs text-[#06B6D4]">
          <TrendingUp className="w-4 h-4" />
          <span className="font-bold tracking-wider uppercase text-[11px]">Control de Costos & Inventarios</span>
        </div>
        <div className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 font-medium">
          Auditoría Activa
        </div>
      </div>

      {/* Scenario Mode Switcher */}
      <div className="grid grid-cols-3 gap-1.5 my-3">
        {(['real', 'optimizado', 'proyeccion'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`py-1.5 px-2 rounded-lg text-xs capitalize transition-all ${
              mode === m
                ? 'bg-[#2563EB]/25 text-[#06B6D4] border border-[#06B6D4]/50 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'bg-[#0A1329] text-[#94A3B8] hover:text-white hover:bg-[#0F1D3D] border border-transparent'
            }`}
          >
            {m === 'real' ? 'Real' : m === 'optimizado' ? 'Optimizado' : 'Proyección'}
          </button>
        ))}
      </div>

      {/* 3 Core Interactive Progress Bars: Costos, Inventarios, Márgenes */}
      <div className="space-y-3 my-3">
        {/* Costos */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#94A3B8] flex items-center gap-1 truncate mr-2">
              <DollarSign className="w-3 h-3 text-[#2563EB] shrink-0" />
              <span>Costos: {current.costos.label}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-emerald-400">{current.costos.delta}</span>
              <span className="text-white font-bold text-xs">{current.costos.value}</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-[#0F1D3D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
              style={{ width: `${current.costos.percent}%` }}
            />
          </div>
        </div>

        {/* Inventarios */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#94A3B8] flex items-center gap-1 truncate mr-2">
              <Layers className="w-3 h-3 text-[#06B6D4] shrink-0" />
              <span>Inventarios: {current.inventarios.label}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-cyan-400">{current.inventarios.delta}</span>
              <span className="text-white font-bold text-xs">{current.inventarios.value}</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-[#0F1D3D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#06B6D4] to-[#38BDF8] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              style={{ width: `${current.inventarios.percent}%` }}
            />
          </div>
        </div>

        {/* Márgenes */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#94A3B8] flex items-center gap-1 truncate mr-2">
              <PieChart className="w-3 h-3 text-[#6366F1] shrink-0" />
              <span>Márgenes: {current.margenes.label}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-indigo-400">{current.margenes.delta}</span>
              <span className="text-white font-bold text-xs">{current.margenes.value}</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-[#0F1D3D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6366F1] to-[#2563EB] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              style={{ width: `${current.margenes.percent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="pt-2 border-t border-[#38bdf8]/10 text-[10px] text-[#94A3B8] flex items-center justify-between">
        <span className="truncate">{current.summary}</span>
        <span className="text-[#06B6D4] font-semibold shrink-0 ml-2">Excel Sync</span>
      </div>
    </div>
  );
};

import React from 'react';
import type { Project } from '../types/project';
import { Layers, CheckCircle2, Globe, HardDrive } from 'lucide-react';

interface StatsBannerProps {
  projects: Project[];
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ projects }) => {
  const total = projects.length;
  const prodCount = projects.filter((p) => p.environment === 'producao').length;
  const internalCount = projects.filter((p) => p.hostType === 'internal').length;
  const publicCount = projects.filter((p) => p.hostType === 'public').length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
      {/* Total Card */}
      <div className="glass-card p-4.5 rounded-2xl flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 shadow-sm">
          <Layers className="w-5.5 h-5.5" />
        </div>
        <div>
          <span className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">{total}</span>
          <p className="text-xs text-[var(--text-muted)] font-semibold mt-0.5">Total de Sistemas</p>
        </div>
      </div>

      {/* Produção Card */}
      <div className="glass-card p-4.5 rounded-2xl flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 shadow-sm">
          <CheckCircle2 className="w-5.5 h-5.5" />
        </div>
        <div>
          <span className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">{prodCount}</span>
          <p className="text-xs text-[var(--text-muted)] font-semibold mt-0.5">Sistemas em Produção</p>
        </div>
      </div>

      {/* Redes Internas Card */}
      <div className="glass-card p-4.5 rounded-2xl flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 shadow-sm">
          <HardDrive className="w-5.5 h-5.5" />
        </div>
        <div>
          <span className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">{internalCount}</span>
          <p className="text-xs text-[var(--text-muted)] font-semibold mt-0.5">Servidores Internos (IP)</p>
        </div>
      </div>

      {/* Domínios / Nuvem Card */}
      <div className="glass-card p-4.5 rounded-2xl flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 shadow-sm">
          <Globe className="w-5.5 h-5.5" />
        </div>
        <div>
          <span className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">{publicCount}</span>
          <p className="text-xs text-[var(--text-muted)] font-semibold mt-0.5">Domínios & Cloud</p>
        </div>
      </div>
    </div>
  );
};

import React, { useMemo } from 'react';
import type { Project } from '../types/project';
import { Layers, CheckCircle2, Globe, HardDrive, Users, X } from 'lucide-react';

interface StatsBannerProps {
  projects: Project[];
  selectedAuthor?: string | null;
  onSelectAuthor?: (author: string | null) => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({
  projects,
  selectedAuthor,
  onSelectAuthor,
}) => {
  const total = projects.length;
  const prodCount = projects.filter((p) => p.environment === 'producao').length;
  const internalCount = projects.filter((p) => p.hostType === 'internal').length;
  const publicCount = projects.filter((p) => p.hostType === 'public').length;

  // Calculate author distribution dynamically
  const authorCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      const author = p.responsavel || 'Não especificado';
      counts[author] = (counts[author] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="mb-8 space-y-4">
      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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

      {/* Aplicações por Autor Card */}
      <div className="glass-card rounded-2xl p-4.5 md:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--border-color)]/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 shadow-xs">
              <Users className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-[var(--text-primary)] tracking-tight">
                  Aplicações por Autor
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] border border-[var(--accent-green-main)]/20">
                  {authorCounts.length} autores
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">
                Quantidade de sistemas por desenvolvedor / responsável (clique para filtrar)
              </p>
            </div>
          </div>

          {selectedAuthor && (
            <button
              onClick={() => onSelectAuthor?.(null)}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)] text-[var(--accent-green-main)] text-xs font-extrabold transition-all cursor-pointer border border-[var(--border-color)]"
            >
              <span>Exibindo: <strong>{selectedAuthor}</strong></span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {authorCounts.map(([author, count]) => {
            const isSelected = selectedAuthor === author;
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

            return (
              <button
                key={author}
                onClick={() => onSelectAuthor?.(isSelected ? null : author)}
                title={`Filtrar por ${author} (${count} ${count === 1 ? 'sistema' : 'sistemas'})`}
                className={`flex flex-col p-3 rounded-xl border transition-all text-left relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-green-glow)] border-[var(--accent-green-main)] shadow-md ring-2 ring-[var(--accent-green-main)]/30 scale-[1.02]'
                    : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] border-[var(--border-color)] hover:border-[var(--accent-green-main)]/50 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-extrabold transition-colors shadow-2xs ${
                      isSelected
                        ? 'bg-[var(--accent-green-main)] text-white'
                        : 'bg-[var(--accent-green-glow)] text-[var(--accent-green-main)] border border-[var(--accent-green-main)]/20'
                    }`}
                  >
                    {getInitials(author)}
                  </div>
                  <span
                    className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded-md transition-colors ${
                      isSelected
                        ? 'bg-[var(--accent-green-main)] text-white'
                        : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)]/60'
                    }`}
                  >
                    {count} {count === 1 ? 'app' : 'apps'}
                  </span>
                </div>

                <span
                  className="text-xs font-bold text-[var(--text-primary)] truncate group-hover:text-[var(--accent-green-main)] transition-colors"
                  title={author}
                >
                  {author}
                </span>

                {/* Progress bar */}
                <div className="w-full bg-[var(--bg-tertiary)] h-1.5 rounded-full mt-2 overflow-hidden border border-[var(--border-color)]/30">
                  <div
                    className="bg-[var(--accent-green-main)] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-[10px] text-[var(--text-muted)] font-semibold">
                  <span>{percentage}%</span>
                  <span>{count} de {total}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

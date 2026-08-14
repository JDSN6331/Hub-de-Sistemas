import React, { useState, useEffect } from 'react';
import { Sprout, Sun, Moon, ShieldCheck, RefreshCw } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onRefreshStatuses: () => void;
  isRefreshing?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  onRefreshStatuses,
  isRefreshing = false,
}) => {
  const [time, setTime] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      
      const formattedDate = now.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      setDateStr(formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-glass mb-8">
      <div className="max-w-[1380px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] text-white flex items-center justify-center shadow-lg shadow-[#2d6a4f]/20 border border-[#52b788]/30">
            <Sprout className="w-7 h-7 text-[#e9c46a]" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Hub de Sistemas - Inteligência de Mercado
            </h1>
            <p className="text-xs md:text-sm text-[var(--text-muted)] flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-green-light)]" />
              Central de Aplicações e Desenvolvimentos
            </p>
          </div>
        </div>

        {/* Controls & Clock */}
        <div className="flex items-center gap-3 flex-wrap justify-end w-full md:w-auto">
          {/* Time Display */}
          <div className="hidden lg:flex flex-col items-end pr-3 border-r border-[var(--border-color)]">
            <span className="text-sm font-bold font-mono text-[var(--text-primary)]">{time}</span>
            <span className="text-[11px] text-[var(--text-muted)]">{dateStr}</span>
          </div>

          {/* Refresh Action */}
          <button
            onClick={onRefreshStatuses}
            disabled={isRefreshing}
            title="Atualizar verificação de conexões"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)] text-[var(--text-secondary)] text-xs font-semibold transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[var(--accent-green-main)]' : ''}`} />
            <span className="hidden sm:inline">Verificar Conexões</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            title={`Mudar para modo ${theme === 'light' ? 'Escuro' : 'Claro'}`}
            className="p-2.5 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)] text-[var(--text-primary)] transition-all"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-[#2d6a4f]" />
            ) : (
              <Sun className="w-5 h-5 text-[#e9c46a]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

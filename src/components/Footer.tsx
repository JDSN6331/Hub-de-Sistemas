import React from 'react';
import { Sprout, RotateCcw, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onResetToDefaults: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onResetToDefaults }) => {
  return (
    <footer className="mt-16 pt-8 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Sprout className="w-4.5 h-4.5 text-[var(--accent-green-main)]" />
          <span className="font-bold text-[var(--text-secondary)]">
            Hub de Sistema - Inteligência de Mercado
          </span>
        </div>

        {/* Center/Right Actions */}
        <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
          <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
            <ShieldCheck className="w-4 h-4 text-[var(--accent-green-light)]" />
            Conexão Segura & Monitorada
          </span>

          <button
            onClick={onResetToDefaults}
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-gold-main)] transition-colors font-medium"
            title="Restaurar lista original de projetos"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Lista Padrão</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Search, LayoutGrid, List, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="glass-panel rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-center gap-3">
      {/* Search Field */}
      <div className="relative flex-1 w-full">
        <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por nome do sistema, porta, tecnologia ou palavras-chave..."
          className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-green-main)] focus:ring-2 focus:ring-[var(--accent-green-main)]/20 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-1 bg-[var(--bg-tertiary)] p-1 rounded-xl shrink-0 self-end md:self-auto border border-[var(--border-color)]/50">
        <button
          onClick={() => setViewMode('grid')}
          title="Visualização em Grade"
          className={`p-2 rounded-lg text-sm font-medium transition-all ${
            viewMode === 'grid'
              ? 'bg-[var(--bg-card)] text-[var(--accent-green-main)] shadow-sm font-bold'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
        <button
          onClick={() => setViewMode('list')}
          title="Visualização em Lista"
          className={`p-2 rounded-lg text-sm font-medium transition-all ${
            viewMode === 'list'
              ? 'bg-[var(--bg-card)] text-[var(--accent-green-main)] shadow-sm font-bold'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <List className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

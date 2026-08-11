import React from 'react';
import type { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { Sprout, SearchX } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  viewMode: 'grid' | 'list';
  onClearFilters: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  viewMode,
  onClearFilters,
}) => {
  if (projects.length === 0) {
    return (
      <div className="bg-[var(--bg-card)] rounded-2xl p-12 border border-[var(--border-color)] text-center flex flex-col items-center justify-center my-8">
        <div className="w-16 h-16 rounded-full bg-[var(--accent-gold-bg)] text-[var(--accent-gold-main)] flex items-center justify-center mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">Nenhum desenvolvimento encontrado</h3>
        <p className="text-sm text-[var(--text-muted)] max-w-md mb-6">
          Não encontramos nenhum projeto que corresponda aos filtros de busca selecionados.
        </p>
        <button
          onClick={onClearFilters}
          className="px-4 py-2 rounded-xl bg-[var(--accent-green-main)] text-white text-sm font-semibold hover:bg-[var(--accent-green-dark)] transition-all"
        >
          Limpar Filtros de Busca
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Sprout className="w-5 h-5 text-[var(--accent-green-main)]" />
        <h2 className="text-base font-extrabold text-[var(--text-primary)]">
          Todos os Projetos do Departamento ({projects.length})
        </h2>
      </div>

      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col gap-3'
        }
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import type { Project, Environment } from '../types/project';
import { AuthModal } from './AuthModal';
import {
  ExternalLink,
  Sprout,
  Globe,
  HardDrive,
  Lock,
  Wrench,
  CheckCircle2,
  Code2,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const renderEnvironmentBadge = (env: Environment) => {
  if (env === 'desenvolvimento') {
    return (
      <span
        className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full badge-desenvolvimento shrink-0 shadow-xs"
        title="Ambiente em Desenvolvimento"
      >
        <Wrench className="w-3 h-3" />
        <span>Em Desenvolvimento</span>
      </span>
    );
  }
  if (env === 'homologacao') {
    return (
      <span
        className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full badge-homologacao shrink-0 shadow-xs"
        title="Ambiente em Homologação"
      >
        <Code2 className="w-3 h-3" />
        <span>Homologação</span>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full badge-producao shrink-0 shadow-xs"
      title="Ambiente em Produção"
    >
      <CheckCircle2 className="w-3 h-3" />
      <span>Produção</span>
    </span>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  viewMode,
}) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const performAccess = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const handleAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (project.requiresAuth) {
      setIsAuthModalOpen(true);
    } else {
      performAccess();
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    performAccess();
  };

  if (viewMode === 'list') {
    return (
      <>
        <div className="fade-in glass-card rounded-2xl p-4 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
          {/* Left Section: Icon + Title + Meta */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-green-glow)] flex items-center justify-center shrink-0 border border-[var(--accent-green-main)]/20 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-[var(--accent-green-main)]" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`status-dot ${project.status}`} title={`Status: ${project.status}`} />
                <h3 className="text-base font-bold text-[var(--text-primary)] truncate group-hover:text-[var(--accent-green-main)] transition-colors">
                  {project.title}
                </h3>
                {renderEnvironmentBadge(project.environment)}
                {project.port && (
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)] font-semibold">
                    :{project.port}
                  </span>
                )}
                {project.requiresAuth && (
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full badge-restrito shrink-0 shadow-xs"
                    title="Requer usuário e senha para acesso"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Restrito</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-[var(--text-muted)] line-clamp-1 mt-1">{project.description}</p>
            </div>
          </div>

          {/* Middle: Tags */}
          <div className="hidden lg:flex items-center gap-1.5 flex-wrap max-w-xs">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-semibold border border-[var(--border-color)]/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center shrink-0 justify-end">
            <button
              onClick={handleAccessClick}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--accent-green-main)] hover:bg-[var(--accent-green-dark)] text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {project.requiresAuth && <Lock className="w-3.5 h-3.5" />}
              <span>Acessar Projeto</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Auth Modal */}
        <AuthModal
          project={project}
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onSuccess={handleAuthSuccess}
        />
      </>
    );
  }

  // Grid View Card
  return (
    <>
      <div className="fade-in glass-card rounded-2xl p-5.5 transition-all flex flex-col justify-between group relative overflow-hidden">
        {/* Top Bar inside Card */}
        <div>
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-green-glow)] flex items-center justify-center border border-[var(--accent-green-main)]/20 group-hover:scale-105 transition-transform shadow-sm shrink-0">
                <Sprout className="w-6 h-6 text-[var(--accent-green-main)]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`status-dot ${project.status}`} />
                  <span className="text-[11px] font-semibold text-[var(--text-muted)]">
                    Sistema Ativo
                  </span>
                </div>
              </div>
            </div>

            {/* Badges container */}
            <div className="flex items-center gap-1.5 flex-wrap justify-end">
              {renderEnvironmentBadge(project.environment)}
              {project.requiresAuth && (
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full badge-restrito shrink-0 shadow-xs"
                  title="Requer Usuário e Senha para cada acesso"
                >
                  <Lock className="w-3 h-3" />
                  <span>Restrito</span>
                </span>
              )}
            </div>
          </div>

          {/* Project Title & Port */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-green-main)] transition-colors leading-snug">
              {project.title}
            </h3>
            {project.port && (
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[var(--accent-gold-bg)] text-[var(--accent-gold-main)] border border-[var(--accent-gold-main)]/20 shrink-0 shadow-sm">
                :{project.port}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Host Type Info */}
          <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-3 border-t border-[var(--border-color)]/60 mb-4">
            <span className="flex items-center gap-1.5 font-semibold">
              {project.hostType === 'internal' ? (
                <>
                  <HardDrive className="w-3.5 h-3.5 text-amber-500" />
                  IP Interno
                </>
              ) : (
                <>
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  Domínio Público
                </>
              )}
            </span>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex items-center gap-1.5 flex-wrap mb-5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-semibold border border-[var(--border-color)]/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="pt-3.5 border-t border-[var(--border-color)] flex items-center justify-end">
          <button
            onClick={handleAccessClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent-green-main)] hover:bg-[var(--accent-green-dark)] text-white text-xs font-extrabold shadow-md shadow-[#2d6a4f]/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            {project.requiresAuth && <Lock className="w-3.5 h-3.5" />}
            <span>Acessar Projeto</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        project={project}
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

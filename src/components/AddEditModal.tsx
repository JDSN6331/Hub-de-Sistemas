import React, { useState, useEffect } from 'react';
import type { Project, Environment, Category, HostType, ProjectStatus } from '../types/project';
import { X, Save, Trash2, Sprout } from 'lucide-react';

interface AddEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  onDelete?: (id: string) => void;
  projectToEdit?: Project | null;
}

export const AddEditModal: React.FC<AddEditModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  projectToEdit,
}) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    url: '',
    port: '',
    description: '',
    environment: 'producao',
    category: 'portal',
    hostType: 'internal',
    status: 'online',
    technologies: [],
    responsavel: '',
    icon: 'Sprout',
    pinned: false,
  });

  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    if (projectToEdit) {
      setFormData(projectToEdit);
      setTechInput(projectToEdit.technologies ? projectToEdit.technologies.join(', ') : '');
    } else {
      setFormData({
        title: '',
        url: '',
        port: '',
        description: '',
        environment: 'producao',
        category: 'portal',
        hostType: 'internal',
        status: 'online',
        technologies: ['React', 'TypeScript'],
        responsavel: '',
        icon: 'Sprout',
        pinned: false,
      });
      setTechInput('React, TypeScript');
    }
  }, [projectToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.url) return;

    const techs = techInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const updatedProject: Project = {
      id: projectToEdit ? projectToEdit.id : `proj-${Date.now()}`,
      title: formData.title || '',
      url: formData.url || '',
      port: formData.port || '',
      description: formData.description || '',
      environment: (formData.environment as Environment) || 'producao',
      category: (formData.category as Category) || 'portal',
      hostType: (formData.hostType as HostType) || 'internal',
      status: (formData.status as ProjectStatus) || 'online',
      technologies: techs.length > 0 ? techs : ['Web'],
      responsavel: formData.responsavel || 'Equipe TI',
      icon: formData.icon || 'Sprout',
      pinned: formData.pinned || false,
    };

    onSave(updatedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
      <div className="bg-[var(--bg-card)] rounded-2xl max-w-2xl w-full border border-[var(--border-color)] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-tertiary)]">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-[var(--accent-green-main)]" />
            <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
              {projectToEdit ? 'Editar Projeto' : 'Cadastrar Novo Desenvolvimento'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Nome do Projeto *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ex: Painel AgroFocus"
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              />
            </div>

            {/* URL */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                URL / Endereço *
              </label>
              <input
                type="url"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="Ex: http://172.16.253.34:5000/"
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              />
            </div>

            {/* Environment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Ambiente
              </label>
              <select
                value={formData.environment}
                onChange={(e) => setFormData({ ...formData, environment: e.target.value as Environment })}
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              >
                <option value="producao">Produção</option>
                <option value="homologacao">Homologação</option>
                <option value="desenvolvimento">Desenvolvimento</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Categoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              >
                <option value="portal">Portal / Aplicação Web</option>
                <option value="backend">API & Backend</option>
                <option value="analytics">Analytics & BI</option>
                <option value="frontend">Frontend & Staging</option>
                <option value="dashboard">Dashboard Operacional</option>
                <option value="cloud">InfraCloud</option>
              </select>
            </div>

            {/* Host Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Tipo de Rede / Servidor
              </label>
              <select
                value={formData.hostType}
                onChange={(e) => setFormData({ ...formData, hostType: e.target.value as HostType })}
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              >
                <option value="internal">Rede Interna (172.16.x)</option>
                <option value="public">Domínio / Cloud Pública</option>
              </select>
            </div>

            {/* Port */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Porta (Opcional)
              </label>
              <input
                type="text"
                value={formData.port || ''}
                onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                placeholder="Ex: 5000"
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
              Descrição do Projeto
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descreva a finalidade e escopo deste sistema..."
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
              Tecnologias (separadas por vírgula)
            </label>
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Ex: React, TypeScript, Python, FastAPI"
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
            />
          </div>

          {/* Responsavel & Icon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Equipe / Responsável
              </label>
              <input
                type="text"
                value={formData.responsavel || ''}
                onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                placeholder="Ex: Equipe AgroTech"
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Ícone do Card
              </label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg-input)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-green-main)]"
              >
                <option value="Sprout">Broto / Agro (Sprout)</option>
                <option value="Server">Servidor / API (Server)</option>
                <option value="BarChart3">Relatórios / BI (BarChart3)</option>
                <option value="Code2">Código / Frontend (Code2)</option>
                <option value="LayoutDashboard">Dashboard Operacional</option>
                <option value="Cloud">Nuvem / Cloud</option>
                <option value="Globe">Global / Web</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
            {projectToEdit && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  onDelete(projectToEdit.id);
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white text-xs font-bold transition-all"
              >
                <Trash2 className="w-4 h-4" />
                <span>Excluir</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)] text-[var(--text-secondary)] text-sm font-semibold transition-all"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[var(--accent-green-main)] hover:bg-[var(--accent-green-dark)] text-white text-sm font-bold shadow-md transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Salvar Projeto</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

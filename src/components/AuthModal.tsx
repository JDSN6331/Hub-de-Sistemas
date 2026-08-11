import React, { useState, useEffect, useRef } from 'react';
import { Lock, X, Eye, EyeOff, AlertCircle, ShieldCheck } from 'lucide-react';
import type { Project } from '../types/project';

interface AuthModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  project,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUsernameInput('');
      setPasswordInput('');
      setErrorMsg('');
      setShowPassword(false);
      setTimeout(() => {
        usernameRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const expectedUser = project.username || 'Admin';
    const expectedPass = project.password || 'IM2026';

    setIsSubmitting(true);

    setTimeout(() => {
      if (
        usernameInput.trim().toLowerCase() === expectedUser.toLowerCase() &&
        passwordInput === expectedPass
      ) {
        setIsSubmitting(false);
        onSuccess();
      } else {
        setIsSubmitting(false);
        setErrorMsg('Usuário ou senha incorretos. Por favor, verifique e tente novamente.');
      }
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
      <div
        className="relative w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Acesso Restrito
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
          Este sistema possui acesso restrito por questões de segurança. Insira suas credenciais corporativas para prosseguir.
        </p>

        {/* Error Alert */}
        {errorMsg && (
          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold mb-5 fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">
              Usuário
            </label>
            <input
              ref={usernameRef}
              type="text"
              required
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Digite seu usuário (ex: Admin)"
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm font-medium focus:outline-none focus:border-[var(--accent-green-main)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite a senha"
                className="w-full px-4 py-2.5 pr-11 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm font-medium focus:outline-none focus:border-[var(--accent-green-main)] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--border-color)] mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-green-main)] hover:bg-[var(--accent-green-dark)] text-white text-xs font-bold shadow-md shadow-[#2d6a4f]/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Verificando...' : 'Autenticar e Acessar'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

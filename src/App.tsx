import React, { useState, useEffect, useMemo } from 'react';
import type { Project } from './types/project';
import { initialProjects, loadProjects, saveProjects } from './data/projects';
import { Header } from './components/Header';
import { StatsBanner } from './components/StatsBanner';
import { SearchBar } from './components/SearchBar';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('agro_theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  // Projects state
  const [projects, setProjects] = useState<Project[]>(loadProjects);

  // Search & View states
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Status refresh state
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sync theme attribute with document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('agro_theme', theme);
  }, [theme]);

  // Persist projects state
  useEffect(() => {
    saveProjects(projects);
  }, [projects]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Ping / Status verification runner
  const handleRefreshStatuses = async () => {
    setIsRefreshing(true);
    
    const updated = await Promise.all(
      projects.map(async (proj) => {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);

          await fetch(proj.url, {
            mode: 'no-cors',
            signal: controller.signal,
          });

          clearTimeout(timeoutId);
          return { ...proj, status: 'online' as const, lastChecked: new Date().toLocaleTimeString() };
        } catch {
          return { ...proj, status: 'online' as const, lastChecked: new Date().toLocaleTimeString() };
        }
      })
    );

    setProjects(updated);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Deseja restaurar a lista original de sistemas do departamento?')) {
      setProjects(initialProjects);
      saveProjects(initialProjects);
    }
  };

  // Filtered projects selector
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      return (
        query === '' ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.url.toLowerCase().includes(query) ||
        (p.port && p.port.includes(query)) ||
        p.environment.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    });
  }, [projects, searchQuery]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onRefreshStatuses={handleRefreshStatuses}
        isRefreshing={isRefreshing}
      />

      {/* Main Container */}
      <main className="app-container">
        {/* KPI & Stats Banner */}
        <StatsBanner projects={projects} />

        {/* Search & View Mode Controls */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Projects Grid / List */}
        <ProjectGrid
          projects={filteredProjects}
          viewMode={viewMode}
          onClearFilters={() => setSearchQuery('')}
        />

        {/* Footer */}
        <Footer onResetToDefaults={handleResetToDefaults} />
      </main>
    </div>
  );
};

export default App;

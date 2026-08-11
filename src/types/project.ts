export type Environment = 'producao' | 'homologacao' | 'desenvolvimento';

export type Category = 'portal' | 'backend' | 'analytics' | 'frontend' | 'dashboard' | 'cloud';

export type HostType = 'public' | 'internal';

export type ProjectStatus = 'online' | 'warning' | 'offline' | 'unknown';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  environment: Environment;
  category: Category;
  hostType: HostType;
  status: ProjectStatus;
  technologies: string[];
  responsavel?: string;
  icon: string;
  pinned?: boolean;
  port?: string;
  lastChecked?: string;
  requiresAuth?: boolean;
  username?: string;
  password?: string;
}

import type { Project } from '../types/project';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Painel do Agronegócio',
    description: 'Painel de notícias do agronegócio brasileiro, cotações, clima e calculadoras agrícolas.',
    url: 'https://www.painelagrofocus.com/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Web'],
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-2',
    title: 'Cotação de Insumos e Pesquisa de Mercado',
    description: 'Plataforma para cadastro e análise de orçamentos/pesquisas de Fertilizantes.',
    url: 'http://172.16.253.34:5000/',
    environment: 'producao',
    category: 'backend',
    hostType: 'internal',
    status: 'online',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    port: '5000',
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-3',
    title: 'AgroMapa',
    description: 'Mapeamento georreferenciado, inteligência geográfica e visualização espacial das propriedades e safras.',
    url: 'http://34.173.233.182/',
    environment: 'producao',
    category: 'cloud',
    hostType: 'public',
    status: 'online',
    technologies: ['Google Cloud', 'GIS', 'Nginx'],
    responsavel: 'Guilherme',
    icon: 'Sprout',
  },
  {
    id: 'proj-4',
    title: 'Análise de Vendas Salesforce',
    description: 'Painel analítico integrado com o Salesforce para monitoramento do funil comercial, metas, desempenho de vendas e análise de descontos manuais.',
    url: 'http://172.16.253.34:5050/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Salesforce', 'Python', 'BI'],
    port: '5050',
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-5',
    title: 'Pedidos Filial x Campo',
    description: 'Painel comparativo com as vendas feitas no Balcão (Filial) x Campo (Fora da Filial).',
    url: 'http://172.16.253.34:5173/',
    environment: 'producao',
    category: 'frontend',
    hostType: 'internal',
    status: 'online',
    technologies: ['Vite', 'React', 'TypeScript'],
    port: '5173',
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-6',
    title: 'Vendas de Fertilizantes de Solo',
    description: 'Módulo dedicado ao acompanhamento das vendas de Fertilizantes de Solo por Mesorregião Geográfica.',
    url: 'http://172.16.253.34:3000/',
    environment: 'producao',
    category: 'dashboard',
    hostType: 'internal',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Dashboard'],
    port: '3000',
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-7',
    title: 'Central de Precificação',
    description: 'Automação que visa otimizar a forma como a precificação é realizada hoje (ERP x Salesforce).',
    url: 'http://172.16.253.134:5174/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Salesforce', 'ERP', 'React', 'Vite'],
    port: '5174',
    responsavel: 'Guilherme',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-11',
    title: 'Central de Cotação',
    description: 'Automação para otimizar o processo de cotação de fertilizantes de solo. Requer usuário e senha para acesso.',
    url: 'http://172.16.251.185:8000/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Python'],
    port: '8000',
    responsavel: 'Irene',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-12',
    title: 'Guia Agronômico',
    description: 'Produtos, ingredientes ativos, dosagens por estágios da lavoura, instruções de aplicação, intervalo de segurança e o calendário completo de manejo.',
    url: 'https://www.guiaagronomico.duquelabs.com.br/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Easypanel'],
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-16',
    title: 'Radar de Eventos',
    description: 'Publicações ligadas a eventos, campanhas e movimentos comerciais.',
    url: 'http://172.16.251.40:8000/',
    environment: 'producao',
    category: 'portal',
    hostType: 'internal',
    status: 'online',
    technologies: ['Eventos', 'Campanhas', 'Comercial'],
    port: '8000',
    responsavel: 'Wellington',
    icon: 'Sprout',
  },
  {
    id: 'proj-18',
    title: 'Análise de Mix de Produtos',
    description: 'Desempenho consolidado da modalidade Mix de Produtos por grupo, produto, filial, vendedor e inteligência estratégica para estruturação de Kits comerciais.',
    url: 'http://172.16.253.34:5175/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Mix de Produtos', 'Analytics', 'Comercial'],
    port: '5175',
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-20',
    title: 'Estúdio de Criação de Vídeo',
    description: 'Aplicação desenvolvida para criação de vídeos com a possibilidade de fazer o download e upload para o Google Drive.',
    url: 'https://www.studio.duquelabs.com.br/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['Vídeo', 'Google Drive', 'Easypanel'],
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-21',
    title: 'Análise de Máquinas',
    description: 'Análise da venda de máquinas e implementos agrícolas trazendo sazonalidade, risco/permanência, balanço de estoque, itens sem custo e critérios/qualidade.',
    url: 'http://172.16.251.40:8000/analise-de-maquinas/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Máquinas', 'Implementos', 'Analytics'],
    port: '8000',
    responsavel: 'Wellington',
    icon: 'Sprout',
  },
  {
    id: 'proj-22',
    title: 'Ritmo',
    description: 'Tarefas, hábitos e metas em um só painel. Saiba o que está em andamento, o que atrasou e o que já foi feito.',
    url: 'https://www.ritmo.duquelabs.com.br/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Web'],
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
  {
    id: 'proj-23',
    title: 'Fluxo',
    description: 'Um bloco de notas compartilhado para sua equipe com prioridades, status e calendário.',
    url: 'https://www.fluxo.duquelabs.com.br/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Web'],
    responsavel: 'José Duque',
    icon: 'Sprout',
  },
];

const STORAGE_KEY = 'agro_hub_sistemas_v28';

export const loadProjects = (): Project[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const initialMap = new Map(initialProjects.map((p) => [p.id, p]));
        const initialIds = new Set(initialProjects.map((p) => p.id));
        const updated = parsed
          .filter((p: Project) => initialIds.has(p.id))
          .map((p: Project) => {
          const initial = initialMap.get(p.id);
          if (initial) {
            return {
              ...p,
              url: initial.url,
              title: initial.title,
              description: initial.description,
              environment: initial.environment,
              responsavel: initial.responsavel || p.responsavel,
            };
          }
          return p;
        });
        const existingIds = new Set(parsed.map((p: Project) => p.id));
        const missingInitial = initialProjects.filter((p) => !existingIds.has(p.id));
        const merged = [...updated, ...missingInitial];
        saveProjects(merged);
        return merged;
      }
    }
  } catch (e) {
    console.warn('Erro ao carregar projetos salvos:', e);
  }
  return initialProjects;
};

export const saveProjects = (projects: Project[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (e) {
    console.error('Erro ao salvar projetos:', e);
  }
};

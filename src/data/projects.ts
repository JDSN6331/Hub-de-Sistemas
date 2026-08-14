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
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-8',
    title: 'Tarefas Diárias',
    description: 'Gerenciador e acompanhamento de tarefas diárias.',
    url: 'https://tarefas-diarias-jdsn.vercel.app/',
    environment: 'producao',
    category: 'frontend',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Vercel'],
    icon: 'Sprout',
  },
  {
    id: 'proj-9',
    title: 'CRM',
    description: 'Sistema de gestão de relacionamento com clientes em fase de desenvolvimento. Requer usuário e senha para acesso.',
    url: 'http://172.16.253.34:3005/',
    environment: 'desenvolvimento',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['React', 'TypeScript', 'CRM'],
    port: '3005',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-10',
    title: 'CRC Comercial Insumos',
    description: 'Plataforma con ênfase no atendimento as Lojas sobre dúvidas e erros (Agentes de IA).',
    url: 'https://crc-comercial-insumos-crc-comercial-insumos.br1rfu.easypanel.host/',
    environment: 'desenvolvimento',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Easypanel'],
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-11',
    title: 'Central de Cotação',
    description: 'Automação para otimizar o processo de cotação de fertilizantes de solo em fase de desenvolvimento. Requer usuário e senha para acesso.',
    url: 'http://172.16.251.185:8000/',
    environment: 'desenvolvimento',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Python'],
    port: '8000',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-12',
    title: 'Guia Agronômico',
    description: 'Produtos, ingredientes ativos, dosagens por estágios da lavoura, instruções de aplicação, intervalo de segurança e o calendário completo de manejo.',
    url: 'https://crc-comercial-insumos-guia-agronomico.br1rfu.easypanel.host/',
    environment: 'producao',
    category: 'portal',
    hostType: 'public',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Easypanel'],
    icon: 'Sprout',
  },
  {
    id: 'proj-13',
    title: 'Análise Comercial Defensivos',
    description: 'Aplicação que faz a análise e comparação de itens do grupo de Defensivos.',
    url: 'http://172.16.254.157:3000/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['React', 'TypeScript', 'Analytics'],
    port: '3000',
    icon: 'Sprout',
  },
  {
    id: 'proj-14',
    title: 'S&OP · Automações',
    description: 'Automações relacionadas ao planejamento de vendas no Demantra.',
    url: 'http://172.16.254.157:3002/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Demantra', 'S&OP', 'Automação'],
    port: '3002',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
  {
    id: 'proj-15',
    title: 'Análise Planejamento x Histórico',
    description: 'Análise dos planejamentos por loja e histórico.',
    url: 'http://172.16.251.42:8501/',
    environment: 'producao',
    category: 'analytics',
    hostType: 'internal',
    status: 'online',
    technologies: ['Python', 'Streamlit', 'Analytics'],
    port: '8501',
    icon: 'Sprout',
    requiresAuth: true,
    username: 'Admin',
    password: 'IM2026',
  },
];

const STORAGE_KEY = 'agro_hub_sistemas_v15';

export const loadProjects = (): Project[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const initialMap = new Map(initialProjects.map((p) => [p.id, p]));
        const updated = parsed.map((p: Project) => {
          const initial = initialMap.get(p.id);
          if (initial) {
            return { ...p, url: initial.url, title: initial.title, description: initial.description };
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

import { IExperience } from '../types';

// Calcula dinamicamente a duração entre duas datas
function calculateDuration(startYear: number, startMonth: number, endYear?: number, endMonth?: number): string {
  const now = new Date();
  const eYear = endYear ?? now.getFullYear();
  const eMonth = endMonth ?? now.getMonth() + 1;

  let totalMonths = (eYear - startYear) * 12 + (eMonth - startMonth) + 1; // +1 inclui o mês atual
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  if (months === 0) return `${years} ${years === 1 ? 'ano' : 'anos'}`;
  return `${years} ${years === 1 ? 'ano' : 'anos'} e ${months} ${months === 1 ? 'mês' : 'meses'}`;
}

export const experiences: IExperience[] = [
  {
    id: 1,
    position: 'Senior Software Engineer I',
    company: 'Solutis Tecnologias',
    period: `abril de 2025 - Atual (${calculateDuration(2025, 4)})`,  
    location: 'Salvador, BA',
    client: 'Bradesco Seguros',
    description: 'Especialista técnico responsável por projetos e sustentação em ambientes Dynamics 2016 (On-Premise v. 8.2). Foco em estabilidade da plataforma e evolução de funcionalidades através de customizações complexas, gerenciamento de segurança e automação de processos de negócio.',
    achievements: [
      'Desenvolvimento e manutenção de componentes back-end em .NET C#, incluindo Plugins e Workflows',
      'Criação de scripts client-side em JavaScript para validações e manipulação dinâmica de formulários',
      'Gestão de perfis de segurança com configuração de Security Roles e Unidades de Negócio',
    ],
    technologies: ['Dynamics 2016', '.NET C#', 'JavaScript', 'SQL Server', 'Visual Studio'],
  },
  {
    id: 2,
    position: 'Analista de Automação de Processos III',
    company: 'GFT Technologies Brasil',
    period: 'novembro de 2024 - março de 2025 (5 meses)',
    location: 'Barueri, SP',
    client: 'Alesat Combustíveis S.A.',
    description: 'Projeto de escopo fechado para digitalização e gerenciamento de dados de campo. Responsável pela arquitetura e implementação de solução completa com Power Platform e Azure, desde coleta de dados até integração e visualização gerencial.',
    achievements: [
      'Desenvolvimento de Canvas App com capacidade offline para coleta de dados em campo',
      'Construção de Model-Driven App para gerenciamento e aprovação centralizada',
      'Orquestração de automações com Azure Logic Apps',
      'Implementação de pipelines de integração com Azure Data Factory',
    ],
    technologies: ['Power Apps', 'Dataverse', 'Azure Logic Apps', 'Azure Data Factory', 'JavaScript'],
  },
  {
    id: 3,
    position: 'Analista de Sistemas PL',
    company: 'BRQ Digital Solutions',
    period: 'novembro de 2023 - outubro de 2024 (1 ano)',
    location: 'São Paulo, SP',
    client: 'Itaú',
    description: 'Desenvolvimento e manutenção de soluções no Dynamics 365 com foco em customizações de back-end e otimização de processos. Tradução de requisitos de negócio em implementações técnicas em ambiente financeiro de alta demanda.',
    achievements: [
      'Desenvolvimento de Plugins e Custom Workflow Activities em C#',
      'Criação de Web Resources (JavaScript, HTML, CSS) para formulários interativos',
      'Automação de processos com Workflows, Business Rules e Power Automate',
      'Desenvolvimento de Model-Driven Apps no Dataverse',
    ],
    technologies: ['Dynamics 365', 'C#', 'JavaScript', 'Power Automate', 'Dataverse'],
  },
  {
    id: 4,
    position: 'Desenvolvedor II',
    company: 'Cogna Educação',
    period: 'março de 2022 - outubro de 2023 (1 ano e 8 meses)',
    location: 'Valinhos, SP',
    client: 'Projetos Internos (Holding)',
    description: 'Desenvolvimento de soluções de automação e engajamento de clientes com Power Platform integrada ao Dynamics 365. Criação de soluções omnichannel para otimização da comunicação. Evolução de Desenvolvedor I para Desenvolvedor II durante o período.',
    achievements: [
      'Desenvolvimento de soluções low-code com Power Apps',
      'Criação de fluxos de automação com Power Automate',
      'Desenvolvimento e integração de Chatbot com Power Virtual Agents',
      'Criação de dashboards analíticos em Power BI',
      'Integração de sistemas com Dataverse',
    ],
    technologies: ['Power Apps', 'Power Automate', 'Power Virtual Agents', 'Dynamics 365 Customer Service', 'Power BI', 'Dataverse'],
  },
  {
    id: 5,
    position: 'Desenvolvedor Junior',
    company: 'RBA Digital',
    period: 'outubro de 2020 - fevereiro de 2022 (1 ano e 5 meses)',
    location: 'Joinville, SC',
    client: 'Consultoria para Diversos Clientes',
    description: 'Primeira imersão profissional no ecossistema Dynamics 365. Participação em todo o ciclo de vida do desenvolvimento de software, desde levantamento de requisitos até implementação e testes. Evolução de Estagiário para Desenvolvedor Júnior durante o período.',
    achievements: [
      'Modelagem de processos de negócio com diagramas UML',
      'Desenvolvimento de aplicações Power Apps (Canvas e Model-Driven)',
      'Criação de fluxos automatizados com Power Automate',
      'Atuação em ambiente ágil (Scrum e Kanban)',
      'Aprendizado de fundamentos da Power Platform e Dynamics 365',
    ],
    technologies: ['Power Apps', 'Power Automate', 'Dataverse', 'UML', 'Scrum', 'Dynamics 365'],
  },
];

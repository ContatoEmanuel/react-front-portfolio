import { IExperience } from '../types';

export const experiences: IExperience[] = [
  {
    id: 1,
    position: 'Desenvolvedor Full Stack',
    company: 'Solutis',
    period: '2023 - Atual',
    description: 'Desenvolvimento de soluções web utilizando React, Node.js e TypeScript. Implementação de APIs RESTful e integração com bancos de dados.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    position: 'Desenvolvedor Frontend',
    company: 'GFT',
    period: '2022 - 2023',
    description: 'Desenvolvimento de interfaces modernas e responsivas para aplicações corporativas. Trabalho com metodologias ágeis e code review.',
    technologies: ['React', 'JavaScript', 'CSS', 'Git', 'Azure DevOps'],
  },
  {
    id: 3,
    position: 'Desenvolvedor Junior',
    company: 'Empresa Anterior',
    period: '2021 - 2022',
    description: 'Manutenção e desenvolvimento de novos recursos para sistemas web. Aprendizado de boas práticas e padrões de desenvolvimento.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL'],
  },
];

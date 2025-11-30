// Tipagem para Experiências Profissionais
export interface IExperience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

// Tipagem para Projetos
export interface IProject {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Tipagem para Perfil
export interface IProfile {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
}

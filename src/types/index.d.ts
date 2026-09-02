// Tipagem para Experiências Profissionais
export interface IExperience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  client?: string;
  description: string;
  achievements: string[];
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

// Tipagem para Categorias do Blog
export interface IBlogCategory {
  name: string;
  color: string;
}

// Tipagem para Posts do Blog
export interface IBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: IBlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  imageGradient?: string;
}

// Tipagem para Certificações
export interface ICertification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  technologies: string[];
  icon: string;
  type?: 'certified' | 'applied-skill' | 'other';
}

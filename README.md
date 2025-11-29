# React Portfolio

Portfólio profissional desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens importadas no código
├── components/
│   ├── layout/          # Navbar, Footer, Container
│   ├── sections/        # Hero, About, Experience, Projects, Contact
│   └── ui/              # Button, Card, Badge, SectionTitle
├── data/                # Dados estáticos (perfil, experiências, projetos)
├── styles/              # CSS global
├── types/               # Interfaces TypeScript
├── App.tsx              # Componente principal
└── main.tsx             # Entry point
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## ✏️ Personalização

### 1. Dados Pessoais

Edite os arquivos em `src/data/`:

- `profile.ts` - Seus links e informações de contato
- `experiences.ts` - Seu histórico profissional
- `projects.ts` - Seus projetos

### 2. Imagens

Adicione suas imagens em:
- `public/resume.pdf` - Seu currículo
- `public/favicon.ico` - Favicon do site
- `src/assets/images/profile-pic.jpg` - Sua foto
- `src/assets/images/project-*-thumb.png` - Thumbnails dos projetos

### 3. Cores

Edite `tailwind.config.js` para customizar as cores primárias e secundárias.

## 📦 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta dist/
```

## 📄 Licença

MIT

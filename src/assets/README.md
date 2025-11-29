# Assets - Imagens e SVGs

Esta pasta contém as imagens que serão importadas e otimizadas pelo Vite.

## Estrutura

- `images/` - Fotos e imagens raster (PNG, JPG)
  - `profile-pic.jpg` - Sua foto de perfil
  - `project-*-thumb.png` - Thumbnails dos projetos
  
- `svg/` - Logos e ícones em formato vetorial

## Adicionando imagens

1. Coloque suas imagens nas pastas apropriadas
2. Importe-as nos componentes React:
   ```tsx
   import profilePic from '@/assets/images/profile-pic.jpg';
   ```

## Placeholder

Enquanto não tiver as imagens reais, o componente está configurado para usar placeholders do https://via.placeholder.com

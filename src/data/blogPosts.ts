import { IBlogPost, IBlogCategory } from '../types';

// ============================================================
// CATEGORIAS DO BLOG
// ============================================================
export const blogCategories: IBlogCategory[] = [
  { name: 'Dynamics 365', color: '#0078D4' },
  { name: 'Power Platform', color: '#742774' },
  { name: '.NET', color: '#512BD4' },
];

// ============================================================
// POSTS DO BLOG
// Para criar um novo post, basta adicionar um novo objeto ao array abaixo.
// O post mais recente aparece primeiro no site.
//
// Campos obrigatórios:
//   id           - Número único incremental
//   slug         - URL amigável (sem acentos, espaços com hífens)
//   title        - Título do artigo
//   excerpt      - Resumo curto (2-3 linhas)
//   content      - Conteúdo completo em HTML
//   category     - Uma das categorias acima
//   tags         - Array de tags relevantes
//   author       - Nome do autor
//   publishedAt  - Data no formato "YYYY-MM-DD"
//   readTimeMinutes - Tempo estimado de leitura
//   imageGradient   - (opcional) Gradiente CSS para o card
// ============================================================
export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    slug: 'plugins-dynamics-365-boas-praticas',
    title: 'Boas Práticas para Desenvolvimento de Plugins no Dynamics 365',
    excerpt: 'Aprenda as melhores práticas para criar plugins robustos e performáticos no Dynamics 365, desde a arquitetura até o deploy em produção.',
    content: `
      <p class="lead">O desenvolvimento de Plugins é uma das formas mais poderosas de estender o comportamento do Dynamics 365. Neste artigo, compartilho práticas que aplico no dia a dia em projetos para grandes clientes como Itaú e Bradesco Seguros.</p>

      <h2>1. Entenda o Pipeline de Execução</h2>
      <p>Antes de escrever qualquer código, é fundamental entender como o pipeline de mensagens funciona no Dynamics 365. Cada operação (Create, Update, Delete, etc.) passa por três estágios: <strong>Pre-Validation</strong>, <strong>Pre-Operation</strong> e <strong>Post-Operation</strong>.</p>
      <ul>
        <li><strong>Pre-Validation (Estágio 10):</strong> Ideal para validações que devem ocorrer antes de qualquer transação ser aberta. Erros aqui não afetam o banco de dados.</li>
        <li><strong>Pre-Operation (Estágio 20):</strong> Executado dentro da transação. Perfeito para modificar dados antes da gravação.</li>
        <li><strong>Post-Operation (Estágio 40):</strong> Executado após a operação principal. Use para ações derivadas, como criar registros relacionados ou enviar notificações.</li>
      </ul>

      <h2>2. Sempre Use Early Bound Classes</h2>
      <p>Utilize classes geradas pelo <strong>CrmSvcUtil</strong> ou <strong>Power Platform CLI</strong> em vez de Late Bound. Isso proporciona IntelliSense, verificação em tempo de compilação e reduz erros de digitação em nomes de atributos.</p>

      <h2>3. Implemente o Padrão de Plugin Base</h2>
      <p>Crie uma classe base abstrata que encapsule a lógica comum: extração do contexto, validação de profundidade, logging e tratamento de exceções. Todos os plugins devem herdar dessa classe.</p>

      <h2>4. Controle a Profundidade de Execução</h2>
      <p>Sempre verifique o <code>IPluginExecutionContext.Depth</code> no início do plugin. Isso previne loops infinitos quando plugins disparam uns aos outros. Uma prática segura é limitar a profundidade máxima a 2 ou 3.</p>

      <h2>5. Use Imagens (Pre/Post Images)</h2>
      <p>Configure Pre-Images e Post-Images no registro do plugin para evitar chamadas desnecessárias ao banco de dados. Isso melhora significativamente a performance, especialmente em operações de Update.</p>

      <h2>6. Tratamento de Exceções Adequado</h2>
      <p>Sempre lance <code>InvalidPluginExecutionException</code> para erros de negócio. Nunca deixe exceções genéricas "escaparem" — elas geram mensagens confusas para o usuário final. Registre exceções técnicas no Trace Log para debugging.</p>

      <h2>Conclusão</h2>
      <p>Seguindo essas práticas, seus plugins serão mais robustos, testáveis e fáceis de manter. Na minha experiência em ambientes enterprise, essas práticas são a diferença entre um projeto sustentável e um que acumula dívida técnica.</p>
    `,
    category: blogCategories[0],
    tags: ['Dynamics 365', 'C#', '.NET', 'Boas Práticas', 'Plugins'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2025-07-15',
    readTimeMinutes: 8,
    imageGradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    slug: 'power-automate-fluxos-avancados',
    title: 'Power Automate: Criando Fluxos Avançados com Expressões e Condições',
    excerpt: 'Domine técnicas avançadas do Power Automate para criar automações complexas que vão além do básico, incluindo expressões, loops e tratamento de erros.',
    content: `
      <p class="lead">O Power Automate é uma ferramenta poderosa que vai muito além de simples "se isso, então aquilo". Neste artigo, exploro técnicas avançadas que uso em projetos enterprise para criar automações robustas e escaláveis.</p>

      <h2>1. Expressões: O Coração dos Fluxos Avançados</h2>
      <p>As expressões do Power Automate permitem manipular dados de formas sofisticadas. Algumas das mais úteis:</p>
      <ul>
        <li><strong>formatDateTime():</strong> Formata datas em qualquer padrão necessário para integração com outros sistemas.</li>
        <li><strong>coalesce():</strong> Retorna o primeiro valor não nulo — essencial para lidar com campos opcionais.</li>
        <li><strong>split() + join():</strong> Manipulação avançada de strings para parsing de dados.</li>
        <li><strong>xpath():</strong> Navegação em XML para integração com serviços SOAP legados.</li>
      </ul>

      <h2>2. Padrão Try-Catch com Scopes</h2>
      <p>Use <strong>Scopes</strong> (Escopos) para implementar tratamento de erros. Configure o escopo "Catch" para executar apenas quando o "Try" falhar, utilizando a configuração <code>runAfter</code> com status "Failed".</p>

      <h2>3. Concorrência e Paralelismo</h2>
      <p>O Power Automate suporta execução paralela com <strong>Apply to Each</strong> (configuração de concorrência) e <strong>Branches paralelas</strong>. Isso pode reduzir drasticamente o tempo de execução em cenários com múltiplas operações independentes.</p>

      <h2>4. Variáveis e Composição</h2>
      <p>Prefira ações <strong>Compose</strong> sobre variáveis quando possível — são mais performáticas. Use variáveis apenas quando precisar de mutabilidade (incremento em loops, concatenação progressiva, etc.).</p>

      <h2>5. Integração com Dataverse</h2>
      <p>Ao integrar com Dataverse, use <strong>FetchXML</strong> para queries complexas em vez de filtros OData simples. O FetchXML suporta JOINs, agregações e filtros avançados que não são possíveis com OData básico.</p>

      <h2>Conclusão</h2>
      <p>Com essas técnicas, você pode criar fluxos que rivalizam com código tradicional em complexidade, mantendo a agilidade e a facilidade de manutenção da plataforma low-code.</p>
    `,
    category: blogCategories[1],
    tags: ['Power Automate', 'Power Platform', 'Automação', 'Low-Code', 'Tutorial'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2025-06-20',
    readTimeMinutes: 10,
    imageGradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 3,
    slug: 'aspnet-core-clean-architecture',
    title: 'ASP.NET Core com Clean Architecture: Guia Prático',
    excerpt: 'Como estruturar projetos ASP.NET Core usando Clean Architecture para criar aplicações escaláveis, testáveis e fáceis de manter.',
    content: `
      <p class="lead">A Clean Architecture é um padrão arquitetural que separa responsabilidades em camadas, tornando o software independente de frameworks, banco de dados e interfaces externas. Neste guia, mostro como aplico isso em projetos reais com ASP.NET Core.</p>

      <h2>1. Estrutura de Camadas</h2>
      <p>A arquitetura é dividida em camadas concêntricas, cada uma com responsabilidades claras:</p>
      <ul>
        <li><strong>Core (Domain):</strong> Entidades, interfaces de repositório, value objects e regras de negócio puras. Zero dependências externas.</li>
        <li><strong>Application:</strong> Casos de uso, DTOs, validadores e interfaces de serviços. Depende apenas do Core.</li>
        <li><strong>Infrastructure:</strong> Implementações concretas — EF Core, serviços externos, cache, etc.</li>
        <li><strong>Presentation:</strong> Controllers, Views, APIs. É a camada mais externa.</li>
      </ul>

      <h2>2. Injeção de Dependência como Espinha Dorsal</h2>
      <p>O ASP.NET Core tem um container de DI nativo. Use-o para registrar suas dependências de forma organizada. Crie extension methods para cada camada:</p>

      <h2>3. CQRS Simplificado com MediatR</h2>
      <p>Implemente <strong>Commands</strong> (escrita) e <strong>Queries</strong> (leitura) separados usando o MediatR. Isso torna cada caso de uso uma classe isolada, facilitando testes e manutenção.</p>

      <h2>4. Validação com FluentValidation</h2>
      <p>Integre FluentValidation na pipeline do MediatR para validação automática de commands e queries antes da execução do handler.</p>

      <h2>5. Repository Pattern com EF Core</h2>
      <p>Crie repositórios genéricos e específicos. O genérico fornece CRUD básico, enquanto os específicos encapsulam queries complexas que envolvem JOINs, projeções e filtros de negócio.</p>

      <h2>Conclusão</h2>
      <p>A Clean Architecture exige mais esforço inicial, mas o retorno em manutenibilidade e testabilidade é imenso. Em projetos enterprise como os que desenvolvo, essa organização é essencial para lidar com a complexidade crescente.</p>
    `,
    category: blogCategories[2],
    tags: ['.NET', 'Clean Architecture', 'Design Patterns', 'Boas Práticas', 'Tutorial'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2025-05-10',
    readTimeMinutes: 12,
    imageGradient: 'from-indigo-600 to-violet-500',
  },
];

// Helper to filter out posts scheduled for the future
export const getVisibleBlogPosts = () => {
  const now = new Date();
  // Reset time to start of day for accurate YYYY-MM-DD comparison
  now.setHours(0, 0, 0, 0);

  return blogPosts
    .filter(post => {
      const postDate = new Date(post.publishedAt + 'T00:00:00');
      return postDate <= now;
    })
    // Also ensure they are sorted by date (newest first)
    .sort((a, b) => new Date(b.publishedAt + 'T00:00:00').getTime() - new Date(a.publishedAt + 'T00:00:00').getTime());
};

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
  {
    id: 4,
    slug: 'alm-power-platform-azure-devops',
    title: 'ALM na Power Platform: Estratégias de Deploy Automatizado com Azure DevOps em Cenários Enterprise',
    excerpt: 'Como tirar a dependência de processos manuais e estruturar uma pipeline CI/CD sólida utilizando o Azure DevOps para a Power Platform.',
    content: `
      <p class="lead">Gerenciar o ciclo de vida de aplicações (ALM) na Power Platform em contas Enterprise não é apenas exportar e importar soluções não gerenciadas manualmente. Quando lidamos com dezenas de desenvolvedores, múltiplos ambientes e SLAs críticos (como já vivenciei no Itaú e Bradesco), a governança exige rastreabilidade, versionamento e automação. O objetivo aqui é tirar a dependência de processos manuais e estruturar uma pipeline CI/CD sólida utilizando o Azure DevOps.</p>

      <h2>1. Separação de Ambientes e Soluções</h2>
      <p>Nunca desenvolva na solução <code>Default</code>. Crie soluções específicas por domínio de negócio e garanta ambientes segregados: DEV (isolados por squad ou desenvolvedor, dependendo da volumetria), UAT, STAGING e PROD. Todas as alterações saem de DEV como <em>Unmanaged</em> e entram nos ambientes subsequentes puramente como <em>Managed</em>.</p>

      <h2>2. Versionamento do Código-Fonte (Git)</h2>
      <p>A Power Platform não guarda histórico de código de forma nativa. O coração do ALM é transformar sua solução em arquivos de texto. Utilize a tarefa do Power Platform Build Tools para desempacotar a solução (<code>Unpack Solution</code>) e fazer commit do <code>.xml</code>, <code>.json</code> e <code>.cs</code> no repositório.</p>

      <h2>3. Automatizando a Extração (CI)</h2>
      <p>Configure uma pipeline no Azure DevOps (YAML) que seja triggada diariamente ou via pull requests. Essa pipeline exporta a solução do ambiente DEV, desempacota e commita as alterações automaticamente para a branch <code>main</code> ou <code>develop</code>.</p>

<pre><code class="language-yaml"># Snippet de exemplo: Exportação e Unpack de Solução no Azure DevOps
steps:
- task: PowerPlatformToolInstaller@2
  inputs:
    DefaultVersion: true

- task: PowerPlatformExportSolution@2
  inputs:
    authenticationType: 'PowerPlatformSPN'
    PowerPlatformSPN: 'ServiceConnection-DEV'
    SolutionName: 'CoreSystem'
    SolutionOutputFile: '$(Build.ArtifactStagingDirectory)/CoreSystem_unmanaged.zip'

- task: PowerPlatformUnpackSolution@2
  inputs:
    SolutionInputFile: '$(Build.ArtifactStagingDirectory)/CoreSystem_unmanaged.zip'
    SolutionTargetFolder: '$(Build.SourcesDirectory)/Solutions/CoreSystem'
</code></pre>

      <h2>4. Pipeline de Release (CD) e Connection References</h2>
      <p>Na entrega (Release), reempacote a solução como <em>Managed</em>. O grande segredo em enterprise é gerenciar variáveis de ambiente e <em>Connection References</em>. Utilize o arquivo de configurações de deployment (Deployment Settings) para mapear dinamicamente conexões do DEV para STG/PROD sem interagir com a interface.</p>

      <div class="my-10">
        <h3 style="text-align:center;font-size:1.15rem;font-weight:700;color:#1e3a5f;margin-bottom:1.2rem;">Fluxo de CI/CD — Power Platform + Azure DevOps</h3>
        <div style="overflow-x:auto;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 170" style="width:100%;max-width:960px;margin:0 auto;display:block;" role="img" aria-label="Diagrama do fluxo de CI/CD: Dev altera em DEV, Pipeline CI extrai e commita, PR aprovado, Pipeline CD empacota Managed, aplica Deployment Settings e implanta em PROD.">
            <defs>
              <linearGradient id="cicd-g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
              <linearGradient id="cicd-g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
              <linearGradient id="cicd-g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/></linearGradient>
              <linearGradient id="cicd-g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient>
              <linearGradient id="cicd-g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
              <linearGradient id="cicd-g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
              <filter id="cicd-shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/></filter>
              <marker id="cicd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker>
            </defs>
            <!-- Step 1 -->
            <rect x="10" y="40" width="130" height="90" rx="14" fill="url(#cicd-g1)" filter="url(#cicd-shadow)"/>
            <text x="75" y="75" text-anchor="middle" fill="#fff" font-size="12.5" font-weight="700" font-family="Inter,system-ui,sans-serif">Dev altera</text>
            <text x="75" y="95" text-anchor="middle" fill="#dbeafe" font-size="11.5" font-family="Inter,system-ui,sans-serif">em DEV</text>
            <!-- Arrow 1→2 -->
            <line x1="140" y1="85" x2="160" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#cicd-arrow)"/>
            <!-- Step 2 -->
            <rect x="162" y="40" width="140" height="90" rx="14" fill="url(#cicd-g2)" filter="url(#cicd-shadow)"/>
            <text x="232" y="70" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,system-ui,sans-serif">Pipeline CI</text>
            <text x="232" y="88" text-anchor="middle" fill="#e0e7ff" font-size="10.5" font-family="Inter,system-ui,sans-serif">Extrai e faz commit</text>
            <text x="232" y="104" text-anchor="middle" fill="#e0e7ff" font-size="10.5" font-family="Inter,system-ui,sans-serif">no Repo Git</text>
            <!-- Arrow 2→3 -->
            <line x1="302" y1="85" x2="322" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#cicd-arrow)"/>
            <!-- Step 3 -->
            <rect x="324" y="40" width="130" height="90" rx="14" fill="url(#cicd-g3)" filter="url(#cicd-shadow)"/>
            <text x="389" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,system-ui,sans-serif">Pull Request</text>
            <text x="389" y="95" text-anchor="middle" fill="#d1fae5" font-size="11" font-family="Inter,system-ui,sans-serif">✓ Aprovado</text>
            <!-- Arrow 3→4 -->
            <line x1="454" y1="85" x2="474" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#cicd-arrow)"/>
            <!-- Step 4 -->
            <rect x="476" y="40" width="140" height="90" rx="14" fill="url(#cicd-g4)" filter="url(#cicd-shadow)"/>
            <text x="546" y="70" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,system-ui,sans-serif">Pipeline CD</text>
            <text x="546" y="88" text-anchor="middle" fill="#ede9fe" font-size="10.5" font-family="Inter,system-ui,sans-serif">Empacota como</text>
            <text x="546" y="104" text-anchor="middle" fill="#ede9fe" font-size="10.5" font-family="Inter,system-ui,sans-serif">Managed</text>
            <!-- Arrow 4→5 -->
            <line x1="616" y1="85" x2="636" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#cicd-arrow)"/>
            <!-- Step 5 -->
            <rect x="638" y="40" width="140" height="90" rx="14" fill="url(#cicd-g5)" filter="url(#cicd-shadow)"/>
            <text x="708" y="70" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Inter,system-ui,sans-serif">Deployment</text>
            <text x="708" y="88" text-anchor="middle" fill="#fef3c7" font-size="10.5" font-family="Inter,system-ui,sans-serif">Aplica Settings</text>
            <text x="708" y="104" text-anchor="middle" fill="#fef3c7" font-size="10.5" font-family="Inter,system-ui,sans-serif">& Variáveis</text>
            <!-- Arrow 5→6 -->
            <line x1="778" y1="85" x2="798" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#cicd-arrow)"/>
            <!-- Step 6 -->
            <rect x="800" y="40" width="140" height="90" rx="14" fill="url(#cicd-g6)" filter="url(#cicd-shadow)"/>
            <text x="870" y="70" text-anchor="middle" fill="#fff" font-size="13" font-weight="800" font-family="Inter,system-ui,sans-serif">🚀 PROD</text>
            <text x="870" y="90" text-anchor="middle" fill="#fee2e2" font-size="10.5" font-family="Inter,system-ui,sans-serif">Implantação</text>
            <text x="870" y="106" text-anchor="middle" fill="#fee2e2" font-size="10.5" font-family="Inter,system-ui,sans-serif">em Produção</text>
            <!-- CI / CD Labels -->
            <rect x="162" y="142" width="292" height="24" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1"/>
            <text x="308" y="158" text-anchor="middle" fill="#4338ca" font-size="11" font-weight="600" font-family="Inter,system-ui,sans-serif">Continuous Integration (CI)</text>
            <rect x="476" y="142" width="464" height="24" rx="6" fill="#faf5ff" stroke="#8b5cf6" stroke-width="1"/>
            <text x="708" y="158" text-anchor="middle" fill="#6d28d9" font-size="11" font-weight="600" font-family="Inter,system-ui,sans-serif">Continuous Delivery (CD)</text>
          </svg>
        </div>
      </div>

      <h2>Conclusão</h2>
      <p>Automatizar o ALM na Power Platform reduz drasticamente as regressões em produção e traz o desenvolvimento low-code/pro-code para o mesmo nível de governança de softwares tradicionais. O investimento de tempo na construção dessas pipelines se paga na primeira semana de operação.</p>

      <hr class="my-8" />
      <p><strong>Como sua equipe lida com o deploy de dezenas de fluxos e apps em produção? Você ainda importa arquivos zip manualmente? Vamos debater sobre estratégias de governança nos comentários ou no LinkedIn!</strong></p>
    `,
    category: blogCategories[1],
    tags: ['ALM', 'Azure DevOps', 'Power Platform', 'CI/CD', 'Enterprise'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2026-08-05',
    readTimeMinutes: 8,
    imageGradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: 5,
    slug: 'custom-apis-vs-custom-actions',
    title: 'Custom APIs vs Custom Actions no Dynamics 365: Qual escolher para arquiteturas escaláveis?',
    excerpt: 'Descubra a diferença de performance entre Custom Actions e Custom APIs e qual a melhor escolha para integrações massivas no Dynamics 365.',
    content: `
      <p class="lead">Por muitos anos, se queríamos expor lógicas complexas do Dataverse para sistemas externos ou plugins, a resposta padrão era "Custom Actions". Com a maturidade da plataforma, as <strong>Custom APIs</strong> entraram no jogo, e a indecisão começou. Em integrações massivas — onde 100 mil requisições por hora não são incomuns —, a escolha errada pode causar gargalos no SQL e estourar os limites da API. Vamos separar o joio do trigo.</p>

      <h2>1. O Paradigma das Custom Actions</h2>
      <p>Custom Actions são construídas sobre o motor de workflows do Dynamics. Elas podem ou não ter código associado (Plugins). O problema em cenários escaláveis é que, mesmo síncronas, o overhead do motor de workflow existe e pode degradar a performance sob estresse elevado.</p>

      <h2>2. A Evolução: Custom APIs</h2>
      <p>Custom APIs foram desenhadas especificamente para developers. Elas contornam o motor de workflow, ligando diretamente o endpoint OData a um assembly de Plugin. Sem overhead, execução limpa, rápida e 100% via código (C#).</p>

      <h2>3. Gestão de Privilégios e Segurança</h2>
      <p>Uma vantagem matadora da Custom API é a habilidade de definir privilégios de execução no nível do endpoint. Você pode definir quem pode executá-la nativamente, em vez de depender apenas da herança de segurança dos workflows.</p>

      <h2>4. OData Routing</h2>
      <p>Custom APIs expõem o roteamento de forma natural. Se você está construindo uma integração server-to-server onde sistemas como Azure Logic Apps precisam chamar o Dataverse, a Custom API é o caminho mais canônico RESTful atual.</p>

<pre><code class="language-csharp">// Snippet de Plugin lidando com uma Custom API
public void Execute(IServiceProvider serviceProvider)
{
    var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
    
    // Recupera os parâmetros de entrada definidos na Custom API
    string accountIdentifier = (string)context.InputParameters["AccountIdentifier"];
    
    // Regra de negócio...
    string result = ProcessEnterpriseAccount(accountIdentifier);
    
    // Retorna os dados pelo OutputParameter da Custom API
    context.OutputParameters["ProcessResult"] = result;
}
</code></pre>

      <div class="my-8">
        <div style="text-align:center; margin-bottom:12px;">
          <strong style="font-size:1.1rem; color:#1e293b;">Pipeline Comparativa: Custom Action vs Custom API</strong>
        </div>
        <svg viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:860px;margin:0 auto;display:block;font-family:system-ui,-apple-system,sans-serif;">
          <!-- Background -->
          <rect width="860" height="340" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

          <!-- ===== LEFT SIDE: Custom Action ===== -->
          <rect x="20" y="16" width="400" height="308" rx="12" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" stroke-dasharray="6 3"/>
          <text x="220" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#b91c1c">CUSTOM ACTION</text>
          <text x="220" y="60" text-anchor="middle" font-size="10" fill="#dc2626" font-style="italic">Overhead do Motor de Workflow</text>

          <!-- Step 1: Request -->
          <rect x="135" y="76" width="170" height="40" rx="8" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
          <text x="220" y="101" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">📨 Requisição HTTP</text>

          <!-- Arrow 1→2 -->
          <line x1="220" y1="116" x2="220" y2="140" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 2: Workflow Engine (overhead) -->
          <rect x="115" y="140" width="210" height="48" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="2"/>
          <text x="220" y="161" text-anchor="middle" font-size="12" fill="#b91c1c" font-weight="700">⚙️ Workflow Engine</text>
          <text x="220" y="178" text-anchor="middle" font-size="10" fill="#dc2626">(overhead de serialização)</text>

          <!-- Arrow 2→3 -->
          <line x1="220" y1="188" x2="220" y2="212" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 3: Plugin -->
          <rect x="135" y="212" width="170" height="40" rx="8" fill="#6366f1" stroke="#4f46e5" stroke-width="1.5"/>
          <text x="220" y="237" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">🔌 Plugin (C#)</text>

          <!-- Arrow 3→4 -->
          <line x1="220" y1="252" x2="220" y2="276" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 4: Response -->
          <rect x="135" y="276" width="170" height="40" rx="8" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
          <text x="220" y="301" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">📤 Resposta</text>

          <!-- Latency badge -->
          <rect x="330" y="156" width="80" height="24" rx="12" fill="#fecaca"/>
          <text x="370" y="172" text-anchor="middle" font-size="10" fill="#b91c1c" font-weight="700">+ Latência</text>


          <!-- ===== RIGHT SIDE: Custom API ===== -->
          <rect x="440" y="16" width="400" height="308" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" stroke-dasharray="6 3"/>
          <text x="640" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#15803d">CUSTOM API</text>
          <text x="640" y="60" text-anchor="middle" font-size="10" fill="#16a34a" font-style="italic">Atalho de Performance ⚡</text>

          <!-- Step 1: Request -->
          <rect x="555" y="76" width="170" height="40" rx="8" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
          <text x="640" y="101" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">📨 Requisição HTTP</text>

          <!-- Arrow 1→2 -->
          <line x1="640" y1="116" x2="640" y2="140" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 2: OData Endpoint (direto) -->
          <rect x="535" y="140" width="210" height="48" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
          <text x="640" y="161" text-anchor="middle" font-size="12" fill="#15803d" font-weight="700">🌐 OData Endpoint</text>
          <text x="640" y="178" text-anchor="middle" font-size="10" fill="#16a34a">(roteamento direto)</text>

          <!-- Arrow 2→3 -->
          <line x1="640" y1="188" x2="640" y2="212" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 3: Plugin -->
          <rect x="555" y="212" width="170" height="40" rx="8" fill="#6366f1" stroke="#4f46e5" stroke-width="1.5"/>
          <text x="640" y="237" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">🔌 Plugin (C#)</text>

          <!-- Arrow 3→4 -->
          <line x1="640" y1="252" x2="640" y2="276" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>

          <!-- Step 4: Response -->
          <rect x="555" y="276" width="170" height="40" rx="8" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
          <text x="640" y="301" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">📤 Resposta</text>

          <!-- Performance badge -->
          <rect x="450" y="156" width="80" height="24" rx="12" fill="#bbf7d0"/>
          <text x="490" y="172" text-anchor="middle" font-size="10" fill="#15803d" font-weight="700">– Latência</text>

          <!-- VS divider -->
          <circle cx="430" cy="170" r="18" fill="#1e293b"/>
          <text x="430" y="175" text-anchor="middle" font-size="12" fill="#fff" font-weight="800">VS</text>

          <!-- Arrow marker definition -->
          <defs>
            <marker id="arrowGray" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
            </marker>
          </defs>
        </svg>
      </div>

      <h2>Conclusão</h2>
      <p>Para integrações de alta volumetria e regras de negócio complexas pro-code, as <strong>Custom APIs</strong> são o novo padrão ouro no Dynamics 365. Mantenha Custom Actions apenas se você precisa dar ao time funcional a capacidade de editar a regra no editor visual.</p>

      <hr class="my-8" />
      <p><strong>Sua arquitetura de integração já foi modernizada para utilizar Custom APIs ou vocês ainda enfrentam gargalos no motor de workflows legados? Compartilhe suas experiências abaixo!</strong></p>
    `,
    category: blogCategories[0],
    tags: ['Dynamics 365', 'Custom API', 'Arquitetura', 'Extensibilidade', 'C#'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2026-08-12',
    readTimeMinutes: 7,
    imageGradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 6,
    slug: 'resiliencia-api-aspnet-core-polly',
    title: 'Implementando Resiliência em APIs ASP.NET Core: Como usar o Polly para tolerância a falhas',
    excerpt: 'Aprenda como aplicar Retry com Exponential Backoff, Circuit Breaker e Fallbacks para tornar suas APIs inquebráveis.',
    content: `
      <p class="lead">Na teoria, microsserviços e integrações em nuvem são perfeitos. Na prática (especialmente integrando sistemas legados com Dynamics 365 ou bases on-premise), as redes falham, limites de rate-limit são atingidos e serviços caem momentaneamente. Um sistema enterprise de verdade não quebra por um <em>timeout</em> isolado; ele respira, tenta novamente e degrada graciosamente. O segredo no .NET para isso se chama <strong>Polly</strong>.</p>

      <h2>1. O Paradoxo do Retentativa Imediata (Retry)</h2>
      <p>Fazer um simples loop <code>while</code> tentando reconectar a uma API sobrecarregada só fará ela cair mais rápido. O padrão correto é o <em>Retry com Exponential Backoff</em>. Cada tentativa espera progressivamente mais tempo (2s, 4s, 8s...).</p>

      <h2>2. Configurando o HttpClientFactory com Polly</h2>
      <p>No ASP.NET Core, acoplar as políticas do Polly no pipeline de injeção de dependência do <code>HttpClient</code> garante que toda requisição feita por esse client siga regras estritas de resiliência.</p>

<pre><code class="language-csharp">// Configurando Polly no Program.cs / Startup.cs
builder.Services.AddHttpClient("EnterpriseAPI", client =>
{
    client.BaseAddress = new Uri("https://api.empresa.com/");
})
.AddTransientHttpErrorPolicy(policyBuilder =>
    policyBuilder.WaitAndRetryAsync(3, retryAttempt => 
        TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)))); // 2s, 4s, 8s
</code></pre>

      <h2>3. O Padrão Circuit Breaker</h2>
      <p>Se um serviço de pagamento está fora do ar, não há porquê bombardear a rede com novas tentativas. O <em>Circuit Breaker</em> (Disjuntor) "abre" após X falhas consecutivas, bloqueando instantaneamente chamadas futuras e retornando um erro de <em>fail-fast</em> até que o tempo limite expire e um teste (half-open) demonstre que o serviço voltou.</p>

<pre><code class="language-csharp">// Política de Circuit Breaker
.AddTransientHttpErrorPolicy(policyBuilder =>
    policyBuilder.CircuitBreakerAsync(
        handledEventsAllowedBeforeBreaking: 5,
        durationOfBreak: TimeSpan.FromSeconds(30)
    ));
</code></pre>

      <h2>4. Fallbacks Estratégicos</h2>
      <p>Para dados não críticos, o <em>Fallback</em> é a cereja do bolo. Se a API externa de cotação cair, retorne o último dado armazenado em cache (Redis) em vez de lançar um erro 500 para o front-end.</p>

      <div class="my-10">
        <h3 style="text-align:center;font-size:1.15rem;font-weight:700;color:#1e3a5f;margin-bottom:1.2rem;">Funil de Resiliência — Polly / ASP.NET Core</h3>
        <div style="overflow-x:auto;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 420" style="width:100%;max-width:700px;margin:0 auto;display:block;" role="img" aria-label="Diagrama do funil de resiliência: Request entra e passa por Fallback, Circuit Breaker, Retry e Timeout antes de chegar na API de Destino.">
            <defs>
              <linearGradient id="res-g0" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
              <linearGradient id="res-g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
              <linearGradient id="res-g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
              <linearGradient id="res-g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
              <linearGradient id="res-g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#0891b2"/></linearGradient>
              <linearGradient id="res-g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/></linearGradient>
              <filter id="res-shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.18"/></filter>
              <marker id="res-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker>
            </defs>

            <!-- REQUEST (top) -->
            <rect x="250" y="8" width="200" height="48" rx="24" fill="url(#res-g0)" filter="url(#res-shadow)"/>
            <text x="350" y="38" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="Inter,system-ui,sans-serif">📨 Request</text>
            <line x1="350" y1="56" x2="350" y2="78" stroke="#94a3b8" stroke-width="2" marker-end="url(#res-arrow)"/>

            <!-- Funnel Layer 1: Fallback -->
            <polygon points="120,82 580,82 540,148 160,148" fill="url(#res-g1)" filter="url(#res-shadow)" rx="8"/>
            <rect x="120" y="82" width="460" height="66" rx="10" fill="url(#res-g1)" filter="url(#res-shadow)" opacity="0"/>
            <text x="350" y="108" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,system-ui,sans-serif">🛡️ Fallback</text>
            <text x="350" y="128" text-anchor="middle" fill="#ede9fe" font-size="11" font-family="Inter,system-ui,sans-serif">Retorna dados em cache se tudo falhar</text>
            <line x1="350" y1="148" x2="350" y2="168" stroke="#94a3b8" stroke-width="2" marker-end="url(#res-arrow)"/>

            <!-- Funnel Layer 2: Circuit Breaker -->
            <polygon points="160,172 540,172 500,238 200,238" fill="url(#res-g2)" filter="url(#res-shadow)"/>
            <text x="350" y="198" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,system-ui,sans-serif">⚡ Circuit Breaker</text>
            <text x="350" y="218" text-anchor="middle" fill="#fee2e2" font-size="11" font-family="Inter,system-ui,sans-serif">Abre após N falhas consecutivas (fail-fast)</text>
            <line x1="350" y1="238" x2="350" y2="258" stroke="#94a3b8" stroke-width="2" marker-end="url(#res-arrow)"/>

            <!-- Funnel Layer 3: Retry -->
            <polygon points="200,262 500,262 460,328 240,328" fill="url(#res-g3)" filter="url(#res-shadow)"/>
            <text x="350" y="288" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,system-ui,sans-serif">🔄 Retry</text>
            <text x="350" y="308" text-anchor="middle" fill="#fef3c7" font-size="11" font-family="Inter,system-ui,sans-serif">Exponential Backoff (2s, 4s, 8s…)</text>
            <line x1="350" y1="328" x2="350" y2="348" stroke="#94a3b8" stroke-width="2" marker-end="url(#res-arrow)"/>

            <!-- Funnel Layer 4: Timeout -->
            <polygon points="240,352 460,352 430,400 270,400" fill="url(#res-g4)" filter="url(#res-shadow)"/>
            <text x="350" y="378" text-anchor="middle" fill="#fff" font-size="14" font-weight="700" font-family="Inter,system-ui,sans-serif">⏱️ Timeout</text>

            <!-- Arrow to API -->
            <line x1="350" y1="400" x2="350" y2="390" stroke="none"/>
            <path d="M350,400 L350,412" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="344,412 356,412 350,420" fill="#94a3b8"/>

            <!-- Brace / Shield label on left -->
            <text x="82" y="215" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600" font-family="Inter,system-ui,sans-serif" transform="rotate(-90,82,215)">BLINDAGENS DE RESILIÊNCIA</text>
            <line x1="102" y1="82" x2="102" y2="400" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>

            <!-- API box at bottom -->
            <rect x="270" y="418" width="160" height="0" fill="none"/>
          </svg>
          <div style="text-align:center;margin-top:0.5rem;">
            <span style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-weight:700;font-size:0.95rem;padding:0.6rem 2rem;border-radius:999px;box-shadow:0 2px 8px rgba(16,185,129,0.3);">✅ API de Destino</span>
          </div>
        </div>
      </div>

      <h2>Conclusão</h2>
      <p>Tolerância a falhas não é uma <em>feature</em> opcional em arquiteturas escaláveis. Usar bibliotecas consolidadas como o Polly protege sua infraestrutura de cascatas de falhas e garante uma SLA altíssima para o negócio.</p>

      <hr class="my-8" />
      <p><strong>Se o seu banco de dados tiver uma instabilidade de 10 segundos agora, suas APIs seguram a onda ou disparam 500 para todos os usuários? Como você lida com retentativas nos seus projetos?</strong></p>
    `,
    category: blogCategories[2],
    tags: ['ASP.NET Core', 'Polly', 'Resiliência', 'API', 'C#'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2026-08-19',
    readTimeMinutes: 9,
    imageGradient: 'from-violet-600 to-fuchsia-600',
  },
  {
    id: 7,
    slug: 'integracao-serverless-dynamics-365-azure-functions',
    title: 'Integração Serverless: Conectando o Dynamics 365 ao Azure Functions de forma segura',
    excerpt: 'Como delegar processamentos pesados do Dataverse para o Azure Functions utilizando Azure Service Bus e Managed Identities.',
    content: `
      <p class="lead">Extensibilidade baseada em Plugins no Dynamics 365 tem limites de tempo (2 minutos de execução) e de sandbox. Quando precisamos rodar tarefas pesadas (geração massiva de PDFs, integrações com SAP complexas, machine learning), é hora de sair do Dataverse e ir para o Azure. O casamento perfeito para escalabilidade sob demanda é conectar o Dynamics 365 com o <strong>Azure Functions</strong>, e a chave de ouro é fazer isso sem vazar credenciais.</p>

      <h2>1. Saia do Sandbox com Azure Service Bus</h2>
      <p>A melhor arquitetura não é uma chamada síncrona HTTP. O Plugin no CRM ou o Power Automate deve postar uma mensagem em uma fila do Azure Service Bus e finalizar sua execução em milissegundos. O Azure Function consome essa fila de forma assíncrona, eliminando gargalos de timeout na interface do usuário.</p>

      <h2>2. A Segurança Nível Enterprise: Managed Identities</h2>
      <p>Nunca armazene <em>Client Secrets</em> hardcoded ou mesmo em variáveis de ambiente se puder evitar. Ative o <em>System Assigned Managed Identity</em> no Azure Function. Isso permite que a Function se autentique no Dataverse sem senhas de forma 100% nativa.</p>

      <h2>3. Consumindo o Dataverse a partir da Function (C#)</h2>
      <p>Utilize o pacote <code>Microsoft.PowerPlatform.Dataverse.Client</code>. O construtor do <code>ServiceClient</code> agora aceita Managed Identity nativamente.</p>

<pre><code class="language-csharp">// Configurando o ServiceClient usando Managed Identity na Azure Function
var options = new DefaultAzureCredentialOptions 
{ 
    ExcludeSharedTokenCacheCredential = true 
};
var credential = new DefaultAzureCredential(options);

var crmUrl = Environment.GetEnvironmentVariable("DataverseUrl");
var serviceClient = new ServiceClient(new Uri(crmUrl), credential);

if(serviceClient.IsReady)
{
    // Conectado com sucesso, sem nenhuma senha!
    var entity = new Entity("account", accountId);
    entity["description"] = "Processado via Azure Function";
    serviceClient.Update(entity);
}
</code></pre>

      <h2>4. Controle de Concorrência (Rate Limits)</h2>
      <p>Se você enviar 10.000 mensagens na fila e a Function escalar para 100 instâncias simultâneas processando no CRM de volta, você sofrerá <em>API Limits</em> do Dataverse (erros 429). Use a configuração de <code>batchSize</code> do Service Bus no <em>host.json</em> da Function para domar a escalabilidade de acordo com a saúde do Dataverse.</p>

      <div class="my-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-200 shadow-sm">
        <h3 class="text-center text-lg font-bold text-gray-800 mb-1">Arquitetura Event-Driven</h3>
        <p class="text-center text-sm text-gray-500 mb-4">Fluxo de integração serverless entre Dynamics 365 e Azure Functions</p>
        <div style="overflow-x:auto;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320" style="width:100%;max-width:900px;margin:0 auto;display:block;" role="img" aria-label="Diagrama da Arquitetura Event-Driven: Dynamics 365 envia dados via Plugin/Webhook para o Azure Service Bus, que dispara o Azure Functions, que se autentica via Azure Active Directory e atualiza o Dynamics 365.">
            <defs>
              <linearGradient id="gD365" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0078D4"/><stop offset="100%" stop-color="#005A9E"/></linearGradient>
              <linearGradient id="gBus" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6366F1"/><stop offset="100%" stop-color="#4338CA"/></linearGradient>
              <linearGradient id="gFunc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
              <linearGradient id="gAAD" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#059669"/></linearGradient>
              <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12"/></filter>
              <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6366F1"/></marker>
              <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#10B981"/></marker>
              <marker id="arrowAmber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#D97706"/></marker>
            </defs>

            <!-- Box 1: Dynamics 365 -->
            <g filter="url(#shadow)">
              <rect x="30" y="100" width="170" height="100" rx="16" fill="url(#gD365)"/>
              <text x="115" y="145" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Dynamics 365</text>
              <text x="115" y="168" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="11" font-family="system-ui,sans-serif">Plugin / Webhook</text>
            </g>

            <!-- Arrow 1 -->
            <line x1="200" y1="150" x2="278" y2="150" stroke="#6366F1" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arrowBlue)"/>
            <text x="240" y="140" text-anchor="middle" fill="#6366F1" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Publica msg</text>

            <!-- Box 2: Service Bus -->
            <g filter="url(#shadow)">
              <rect x="280" y="100" width="170" height="100" rx="16" fill="url(#gBus)"/>
              <text x="365" y="145" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Service Bus</text>
              <text x="365" y="168" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="11" font-family="system-ui,sans-serif">Fila / Tópico</text>
            </g>

            <!-- Arrow 2 -->
            <line x1="450" y1="150" x2="528" y2="150" stroke="#D97706" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arrowAmber)"/>
            <text x="490" y="140" text-anchor="middle" fill="#D97706" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Trigger</text>

            <!-- Box 3: Azure Functions -->
            <g filter="url(#shadow)">
              <rect x="530" y="100" width="170" height="100" rx="16" fill="url(#gFunc)"/>
              <text x="615" y="145" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Azure Functions</text>
              <text x="615" y="168" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="11" font-family="system-ui,sans-serif">Processamento</text>
            </g>

            <!-- Box 4: Azure AD -->
            <g filter="url(#shadow)">
              <rect x="680" y="230" width="180" height="70" rx="14" fill="url(#gAAD)"/>
              <text x="770" y="262" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="system-ui,sans-serif">Azure Active Directory</text>
              <text x="770" y="280" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="10" font-family="system-ui,sans-serif">Managed Identity</text>
            </g>

            <!-- Arrow: Functions -> AAD -->
            <line x1="660" y1="200" x2="720" y2="230" stroke="#10B981" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrowGreen)"/>
            <text x="670" y="218" text-anchor="middle" fill="#10B981" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Autentica</text>

            <!-- Arrow: Functions -> back to D365 (curved) -->
            <path d="M 615 200 C 615 280, 300 290, 115 200" stroke="#0078D4" stroke-width="2.5" fill="none" stroke-dasharray="6 3" marker-end="url(#arrowBlue)"/>
            <text x="380" y="275" text-anchor="middle" fill="#0078D4" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Atualiza D365 (seguro, sem senhas)</text>

            <!-- Step labels -->
            <g font-family="system-ui,sans-serif" font-size="11">
              <circle cx="215" cy="120" r="10" fill="#6366F1"/><text x="215" y="124" text-anchor="middle" fill="white" font-size="10" font-weight="bold">1</text>
              <circle cx="465" cy="120" r="10" fill="#D97706"/><text x="465" y="124" text-anchor="middle" fill="white" font-size="10" font-weight="bold">2</text>
              <circle cx="640" cy="215" r="10" fill="#10B981"/><text x="640" y="219" text-anchor="middle" fill="white" font-size="10" font-weight="bold">3</text>
              <circle cx="365" cy="260" r="10" fill="#0078D4"/><text x="365" y="264" text-anchor="middle" fill="white" font-size="10" font-weight="bold">4</text>
            </g>
          </svg>
        </div>
        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;font-size:12px;color:#4B5563;font-family:system-ui,sans-serif;">
          <span><strong style="color:#6366F1">①</strong> Plugin/Webhook publica mensagem</span>
          <span><strong style="color:#D97706">②</strong> Service Bus dispara a Function</span>
          <span><strong style="color:#10B981">③</strong> Autentica via Managed Identity</span>
          <span><strong style="color:#0078D4">④</strong> Atualiza D365 sem credenciais</span>
        </div>
      </div>

      <h2>Conclusão</h2>
      <p>Delegar processos pesados para o Azure Functions mantem a experiência do usuário do Dynamics ágil, livrando-o da carga computacional. Utilizar <em>Managed Identities</em> eleva essa arquitetura ao grau Enterprise de segurança imposto por bancos e seguradoras.</p>

      <hr class="my-8" />
      <p><strong>Você tem aquele plugin que sempre estoura o timeout de 2 minutos gerando planilhas? Chegou a hora de mover isso para o Azure? Deixe sua dúvida aqui!</strong></p>
    `,
    category: blogCategories[0],
    tags: ['Azure Functions', 'Dynamics 365', 'Serverless', 'Integração', 'Segurança'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2026-08-26',
    readTimeMinutes: 8,
    imageGradient: 'from-blue-700 to-indigo-800',
  },
  {
    id: 8,
    slug: 'otimizacao-avancada-dataverse-fetchxml',
    title: 'Otimização Avançada no Dataverse: Extraindo o máximo de performance com FetchXML e paginação',
    excerpt: 'Lidando com milhões de registros? Entenda como Paging Cookies e consultas otimizadas mudam o jogo na plataforma Microsoft.',
    content: `
      <p class="lead">Em sistemas Enterprise, é comum lidarmos com milhões de registros em tabelas centrais (como transações, clientes, logs). O momento da verdade não é quando você consulta 100 linhas, mas sim quando você precisa iterar sobre 50.000 registros para um batch noturno. OData e consultas LINQ podem não dar conta; o domínio total sobre <strong>FetchXML</strong> aliado a paginação segura (Paging Cookies) é o que separa o programador júnior do arquiteto.</p>

      <h2>1. Reduza o Payload com Atributos Direcionados</h2>
      <p>Parece óbvio, mas 80% dos problemas de performance do Dataverse vêm do erro clássico: selecionar colunas que você não precisa (<code>&lt;all-attributes /&gt;</code> ou <code>ColumnSet(true)</code>). Se sua automação só precisa do ID e do Status, solicite estritamente esses dois campos.</p>

      <h2>2. A Arte do Paging Cookie</h2>
      <p>Quando uma query no FetchXML retorna mais de 5.000 registros, o Dataverse corta o resultado. Recuperar a próxima página apenas pedindo <code>page="2"</code> é ineficiente no lado do banco de dados (SQL Server subjacente). Você deve utilizar o <strong>Paging Cookie</strong> devolvido na primeira requisição para que o SQL vá direto para o ponteiro correto.</p>

      <h2>3. Implementando a Paginação no C#</h2>
      <p>O SDK facilita a paginação utilizando um loop simples. Veja como construir isso com baixo acoplamento:</p>

<pre><code class="language-csharp">// Snippet C# para Paginação Rápida com FetchXML
string fetchXmlBase = @"
&lt;fetch version='1.0' mapping='logical' count='5000'&gt;
    &lt;entity name='contact'&gt;
        &lt;attribute name='contactid' /&gt;
        &lt;attribute name='fullname' /&gt;
        &lt;filter&gt;
            &lt;condition attribute='statecode' operator='eq' value='0' /&gt;
        &lt;/filter&gt;
    &lt;/entity&gt;
&lt;/fetch&gt;";

int pageNumber = 1;
string pagingCookie = null;
bool moreRecords = true;

while (moreRecords)
{
    string xmlToExecute = CreateXml(fetchXmlBase, pagingCookie, pageNumber);
    
    var response = (RetrieveMultipleResponse)service.Execute(new RetrieveMultipleRequest
    {
        Query = new FetchExpression(xmlToExecute)
    });

    // Processar os 5000 registros
    ProcessBatch(response.EntityCollection.Entities);

    moreRecords = response.EntityCollection.MoreRecords;
    if (moreRecords)
    {
        pageNumber++;
        pagingCookie = response.EntityCollection.PagingCookie;
    }
}
</code></pre>

      <h2>4. Use <code>no-lock="true"</code> para Grandes Consultas</h2>
      <p>Se você está fazendo consultas de leitura massiva e tem certeza de que não necessita de travas de concorrência nos registros consultados (por exemplo, relatórios noturnos), adicione o atributo <code>no-lock="true"</code> à tag <code>&lt;fetch&gt;</code>. Isso diz ao SQL do Dataverse para usar a diretiva <code>(NOLOCK)</code>, evitando deadlocks graves durante a operação de usuários no dia.</p>

      <div class="my-8 p-6 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl border border-emerald-200 shadow-sm">
        <h3 class="text-center text-lg font-bold text-gray-800 mb-1">Paging Loop — Paginação com Cookie</h3>
        <p class="text-center text-sm text-gray-500 mb-4">Mecanismo iterativo de paginação FetchXML no Dataverse</p>
        <div style="overflow-x:auto;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 380" style="width:100%;max-width:940px;margin:0 auto;display:block;" role="img" aria-label="Diagrama do Paging Loop: Cliente envia FetchXML pedindo registros 1 a 5000, Dataverse retorna registros mais Paging Cookie, Cliente injeta cookie na próxima query e pede registros 5001 a 10000, e o ciclo se repete.">
            <defs>
              <linearGradient id="gClient8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#0369A1"/></linearGradient>
              <linearGradient id="gDataverse8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#6D28D9"/></linearGradient>
              <linearGradient id="gCookie8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
              <linearGradient id="gInject8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#059669"/></linearGradient>
              <filter id="sh8"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12"/></filter>
              <marker id="arr8Blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0EA5E9"/></marker>
              <marker id="arr8Purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6"/></marker>
              <marker id="arr8Amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#D97706"/></marker>
              <marker id="arr8Green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#10B981"/></marker>
            </defs>

            <!-- Box 1: Cliente / App -->
            <g filter="url(#sh8)">
              <rect x="30" y="90" width="180" height="110" rx="16" fill="url(#gClient8)"/>
              <text x="120" y="132" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Cliente / App</text>
              <text x="120" y="155" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="11" font-family="system-ui,sans-serif">FetchXML Request</text>
              <text x="120" y="175" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-family="system-ui,sans-serif">page="1"  count="5000"</text>
            </g>

            <!-- Arrow 1: Client -> Dataverse -->
            <line x1="210" y1="145" x2="298" y2="145" stroke="#0EA5E9" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arr8Blue)"/>
            <text x="255" y="135" text-anchor="middle" fill="#0EA5E9" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Req 1..5000</text>

            <!-- Box 2: Dataverse -->
            <g filter="url(#sh8)">
              <rect x="300" y="90" width="180" height="110" rx="16" fill="url(#gDataverse8)"/>
              <text x="390" y="132" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Dataverse</text>
              <text x="390" y="155" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="11" font-family="system-ui,sans-serif">SQL Server</text>
              <text x="390" y="175" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-family="system-ui,sans-serif">Processa & retorna</text>
            </g>

            <!-- Arrow 2: Dataverse -> Cookie -->
            <line x1="480" y1="145" x2="568" y2="145" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arr8Purple)"/>
            <text x="525" y="135" text-anchor="middle" fill="#8B5CF6" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Retorna</text>

            <!-- Box 3: Paging Cookie -->
            <g filter="url(#sh8)">
              <rect x="570" y="90" width="180" height="110" rx="16" fill="url(#gCookie8)"/>
              <text x="660" y="128" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">Registros</text>
              <text x="660" y="150" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="system-ui,sans-serif">+ Paging Cookie</text>
              <text x="660" y="175" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-family="system-ui,sans-serif">5000 rows + cursor XML</text>
            </g>

            <!-- Arrow 3: Cookie down to Inject -->
            <line x1="660" y1="200" x2="660" y2="248" stroke="#D97706" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arr8Amber)"/>
            <text x="695" y="230" text-anchor="start" fill="#D97706" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Extrai cookie</text>

            <!-- Box 4: Inject Cookie -->
            <g filter="url(#sh8)">
              <rect x="570" y="250" width="180" height="80" rx="14" fill="url(#gInject8)"/>
              <text x="660" y="282" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="system-ui,sans-serif">Injeta Cookie</text>
              <text x="660" y="305" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="10" font-family="system-ui,sans-serif">paging-cookie="..." page="2"</text>
            </g>

            <!-- Arrow 4: Curved return arrow from Inject back to Client (loop) -->
            <path d="M 570 290 C 400 340, 200 340, 120 200" stroke="#10B981" stroke-width="2.5" fill="none" stroke-dasharray="6 3" marker-end="url(#arr8Green)"/>
            <text x="340" y="340" text-anchor="middle" fill="#059669" font-size="11" font-weight="600" font-family="system-ui,sans-serif">Próxima página → 5001..10000  (repete até morerecords = false)</text>

            <!-- Loop icon -->
            <g transform="translate(345, 305)">
              <circle cx="0" cy="0" r="14" fill="#059669" opacity="0.15"/>
              <path d="M -6 0 A 6 6 0 1 1 0 6" stroke="#059669" stroke-width="2" fill="none" marker-end="url(#arr8Green)"/>
            </g>

            <!-- Step badges -->
            <g font-family="system-ui,sans-serif" font-size="11">
              <circle cx="222" cy="115" r="10" fill="#0EA5E9"/><text x="222" y="119" text-anchor="middle" fill="white" font-size="10" font-weight="bold">1</text>
              <circle cx="492" cy="115" r="10" fill="#8B5CF6"/><text x="492" y="119" text-anchor="middle" fill="white" font-size="10" font-weight="bold">2</text>
              <circle cx="690" cy="215" r="10" fill="#D97706"/><text x="690" y="219" text-anchor="middle" fill="white" font-size="10" font-weight="bold">3</text>
              <circle cx="555" cy="320" r="10" fill="#10B981"/><text x="555" y="324" text-anchor="middle" fill="white" font-size="10" font-weight="bold">4</text>
            </g>

            <!-- Title badge -->
            <rect x="350" y="15" width="240" height="32" rx="16" fill="#0F172A" opacity="0.07"/>
            <text x="470" y="37" text-anchor="middle" fill="#1E293B" font-size="12" font-weight="bold" font-family="system-ui,sans-serif">♻ Iterative Paging Loop</text>
          </svg>
        </div>
        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;font-size:12px;color:#4B5563;font-family:system-ui,sans-serif;">
          <span><strong style="color:#0EA5E9">①</strong> Cliente envia FetchXML (page 1, count 5000)</span>
          <span><strong style="color:#8B5CF6">②</strong> Dataverse retorna registros + cookie</span>
          <span><strong style="color:#D97706">③</strong> Extrai o paging-cookie do XML</span>
          <span><strong style="color:#10B981">④</strong> Injeta cookie e solicita próxima página</span>
        </div>
      </div>

      <h2>Conclusão</h2>
      <p>Tirar o peso do servidor SQL através de paginação eficiente (Paging Cookie) e leitura destravada (no-lock) é fundamental para operações diárias de alto tráfego. No fim do dia, performance de consulta no Dataverse é pura responsabilidade de uma boa estrutura arquitetural no código do cliente.</p>

      <hr class="my-8" />
      <p><strong>Quais estratégias de processamento em lote você utiliza no Dataverse quando passa da barreira dos 100 mil registros? Compartilhe seus desafios nos comentários!</strong></p>
    `,
    category: blogCategories[0],
    tags: ['Dataverse', 'FetchXML', 'Performance', 'Otimização', 'Dynamics 365'],
    author: 'Emanuel A Macêdo',
    publishedAt: '2026-09-02',
    readTimeMinutes: 7,
    imageGradient: 'from-emerald-600 to-teal-500',
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
    // Ensure they are sorted by ID from highest to lowest
    .sort((a, b) => b.id - a.id);
};

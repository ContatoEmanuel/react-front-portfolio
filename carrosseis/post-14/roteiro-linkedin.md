# 🚀 Carrossel LinkedIn — Post #14: Modernização de Legado
**Tema:** O custo oculto do legado on-premise e o Strangler Fig Pattern para Dynamics 365 Cloud  
**Autor:** Emanuel A Macêdo (Senior Software Engineer — Dynamics 365, Power Platform, .NET C#, Azure)  
**Blog Post Correspondente:** `id: 14` — *Modernização de Legado: Strangler Fig Pattern para Migração Gradual ao Dynamics 365 Cloud*

---

## 📁 Arquivos deste Carrossel

- 📄 **PDF Oficial para upload no LinkedIn:** [`carrossel.pdf`](./carrossel.pdf) (6 páginas, 1080×1080px)
- 🌐 **Visualizador Interativo Web:** [`carrossel.html`](./carrossel.html) (Navegação com setas e teclado)
- 🖼️ **Imagens individuais (PNG 1080×1080px):**
  - [Slide 1 (Capa)](./slide-1.png)
  - [Slide 2 (A Dor)](./slide-2.png)
  - [Slide 3 (A Causa Técnica)](./slide-3.png)
  - [Slide 4 (A Solução Sênior)](./slide-4.png)
  - [Slide 5 (O Resultado)](./slide-5.png)
  - [Slide 6 (CTA)](./slide-6.png)

---

## 🎬 Roteiro dos Slides

### Slide 1 (Capa)
* **Texto Principal:** Seu legado on-premise está **sangrando dinheiro?**
* **Tag:** MODERNIZAÇÃO DE LEGADO
* **Autor:** Emanuel A Macêdo · Senior Software Engineer · Dynamics 365 · Azure
* **Brand:** EAM COMPANY

### Slide 2 (O Problema / A Dor)
* **Título:** O custo que ninguém contabiliza
* **Itens:**
  - 💸 **68%** do orçamento de TI gasto em manutenção, não em inovação.
  - ⏱️ Deploys que levam **semanas** em vez de minutos.
  - 🔓 Vulnerabilidades acumuladas em **versões sem suporte**.
  - 📉 Cada mês de adiamento custa **3x mais** que a migração.

### Slide 3 (A Causa Técnica)
* **Título:** Onde a maioria dos times erra
* **Itens:**
  - ✕ **"Lift and Shift"** — Copiar o problema para a nuvem não é migrar.
  - ✕ **Acoplamento monolítico** — Módulos que dependem de stored procedures de 2008.
  - ✕ **Ignorar o Data Model** — Forçar schemas legados no Dataverse sem redesenho.
  - ✕ **Zero automação** — Migração manual é migração que falha.

### Slide 4 (A Solução Sênior)
* **Título:** Strangler Fig Pattern
* **Subtítulo:** Migração gradual em 4 fases — sem Big Bang, sem downtime.
* **Fases:**
  - **01. Dual-Write:** Dados fluem bidireccionalmente entre on-premise e Dataverse.
  - **02. Novas features no Dynamics 365:** Feature freeze no legado. Tudo novo nasce na nuvem.
  - **03. Azure Service Bus:** Broker de mensagens orquestra a comunicação na transição.
  - **04. Descomissionamento:** Legado desligado módulo a módulo, sem interrupção.

### Slide 5 (O Resultado)
* **Título:** O que muda na prática
* **Grid:**
  - 🚀 **Deploy Contínuo:** CI/CD com Azure DevOps. Entregas em minutos, não semanas. (↓ 95% no tempo de deploy)
  - 🔒 **Compliance Automático:** Azure AD + Dataverse Security Roles. Políticas gerenciadas. (Zero gaps de segurança)
  - 📊 **Escala Elástica:** Infraestrutura que cresce sob demanda. Sem provisionar hardware. (∞ escalabilidade)
  - 💰 **ROI em 8 Meses:** Redução nos custos operacionais de TI com payback rápido. (↓ 40% nos custos)

### Slide 6 (CTA)
* **Título:** Quer ver o código e a arquitetura?
* **Subtítulo:** Artigo completo com implementação real no blog da EAM Company.
* **Tags:** `C#` · `FetchXML` · `Azure Functions` · `Service Bus`
* **Botão:** 🔗 Link nos comentários

---

## 📝 Legenda Pronta para o LinkedIn

```text
Seu sistema legado consome até 68% do orçamento de TI só para se manter vivo — e cada mês de adiamento triplica o custo de modernização.

O erro mais comum que vejo em projetos enterprise é tentar resolver isso com "Big Bang" (virar a chave de uma vez) ou "Lift and Shift" (copiar o monólito para a nuvem sem redesenho).

No carrossel acima, resumi como aplico o Strangler Fig Pattern integrado ao ecossistema Microsoft (Dynamics 365 + Azure Service Bus + Dataverse) para migrar gradualmente sem downtime e com risco zero para a operação.

Se você quer ver a implementação técnica detalhada — com diagrama de arquitetura, Azure Function em C# para sincronização e queries FetchXML de governança —, publiquei o artigo completo no blog da EAM Company:

👉 Link do artigo completo nos comentários!

#SoftwareArchitecture #TechLeadership #Dynamics365 #CloudMigration #LegacyModernization #PowerPlatform #Azure
```

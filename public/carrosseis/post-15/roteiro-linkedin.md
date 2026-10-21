# 🚀 Carrossel LinkedIn — Post #15: Otimização de Custos (FinOps) no Azure & Dataverse
**Tema:** FinOps no Azure: Redesenho de integrações pesadas do Dataverse para cortar recursos computacionais e reduzir a fatura da nuvem  
**Autor:** Emanuel A Macêdo (Senior Software Engineer — Dynamics 365, Power Platform, .NET C#, Azure)  
**Blog Post Correspondente:** `id: 15` — *Otimização de Custos (FinOps) no Azure: Como redesenhar integrações pesadas do Dataverse para consumir menos recursos computacionais e reduzir a fatura da nuvem*

---

## 📁 Arquivos deste Carrossel

- 🌐 **Visualizador Interativo Web:** [`carrossel.html`](./carrossel.html) (Navegação com setas e teclado)
- 📄 **Versão de Impressão/Exportação:** [`carrossel-print.html`](./carrossel-print.html)
- 🖼️ **Páginas Individuais:**
  - [Slide 1 (Capa)](./slide-1.html)
  - [Slide 2 (A Dor)](./slide-2.html)
  - [Slide 3 (A Causa Técnica)](./slide-3.html)
  - [Slide 4 (A Solução Sênior)](./slide-4.html)
  - [Slide 5 (O Resultado)](./slide-5.html)
  - [Slide 6 (CTA)](./slide-6.html)

---

## 🎬 Roteiro dos Slides

### Slide 1 (Capa)
* **Texto Principal:** Sua fatura do Azure paga **consultas ineficientes?**
* **Tag:** AZURE FINOPS & DATAVERSE
* **Autor:** Emanuel A Macêdo · Senior Software Engineer · Dynamics 365 · Azure
* **Brand:** EAM COMPANY

### Slide 2 (O Problema / A Dor)
* **Título:** O custo que ninguém audita
* **Itens:**
  - 💸 **Fatura inflada:** Milhares de dólares desperdiçados em computação ociosa e polling.
  - ⏱️ **Throttling recorrente:** Limites de API (*Service Protection Limits*) estourados.
  - 🔒 **Backlog represado:** Filas travadas por sincronizações síncronas monolíticas.
  - 📉 **Desperdício elástico:** Instâncias Premium do Azure pagas para processar registros sem alteração.

### Slide 3 (A Causa Técnica)
* **Título:** Onde a maioria dos times erra
* **Itens:**
  - ✕ **Polling Recorrente** — Functions com `TimerTrigger` consultando o Dataverse a cada 1 minuto.
  - ✕ **`ColumnSet(true)`** — Trafegar payloads gigantes quando apenas 3 campos são necessários.
  - ✕ **Power Automate em Loop** — Conectores sequenciais gerando milhares de API calls desnecessárias.
  - ✕ **Webhooks Síncronos** — Plugins bloqueando transações enquanto aguardam respostas externas.

### Slide 4 (A Solução Sênior)
* **Título:** Event-Driven & Change Tracking
* **Subtítulo:** Arquitetura reativa e granular — pague estritamente pelo que muda.
* **Fases / Pilares:**
  - **01. Dataverse Change Tracking:** Consuma apenas o delta com `DataToken`, sem varrer tabelas inteiras.
  - **02. Service Bus Topics:** Desacoplamento assíncrono via Service Endpoint nativo.
  - **03. Batch Trigger em .NET:** Azure Functions processando lotes com paralelismo controlado.
  - **04. Consumption Plan (Serverless):** Custo $0 quando não houver deltas para sincronizar.

### Slide 5 (O Resultado)
* **Título:** O que muda na prática
* **Grid:**
  - 📉 **-65% na Fatura:** Eliminação do polling contínuo e computação ociosa no Azure.
  - ⚡ **Zero Throttling:** Consumo estritamente dentro dos Service Protection Limits.
  - 🚀 **Throughput 10x Maior:** Lotes compactos processados via .NET Isolated assíncrono.
  - 🛡️ **Governança FinOps:** Previsibilidade financeira e arquitetura pronta para alta escala.

### Slide 6 (CTA)
* **Tag decorativa:** `</polling> → <event-driven/>`
* **Título:** Quer ver o código e<br>a arquitetura por trás disso?
* **Subtítulo:** Artigo técnico completo com benchmark e snippet C# no blog da EAM Company.
* **Badges:** `C# .NET 8` · `Change Tracking` · `Azure Functions` · `Service Bus`
* **Botão:** 🔗 Link no primeiro comentário
* **Brand:** EAM COMPANY

---

## 📱 Texto para o LinkedIn (Legenda)

Integrações mal desenhadas entre Dataverse e Azure drenam orçamento corporativo em silêncio.  
Arrasta para o lado para entender como redesenhamos essa arquitetura e reduzimos em mais de 60% os custos operacionais de nuvem.  
Artigo técnico com código no blog da EAM Company — link direto no primeiro comentário. 👇  

#SoftwareArchitecture #AzureFinOps #DotNet #PowerPlatform #TechLeadership

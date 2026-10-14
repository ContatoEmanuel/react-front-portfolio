# 📦 Pacote de Conteúdo — Semana: Modernização de Legado
**Autor:** Emanuel A Macêdo | Senior Software Engineer  
**Data:** 14 de Outubro de 2026  
**Tema:** O custo oculto de manter sistemas on-premise e a estratégia de migração gradual para o Dynamics 365 Cloud.

---

## Parte 1: Carrossel para o LinkedIn (Roteiro de Slides)

### 🟦 Slide 1 — CAPA
> **Seu legado on-premise está sangrando dinheiro?**

- Subtítulo: *Emanuel A Macêdo · Senior Software Engineer*
- Identidade visual: fundo escuro, tipografia bold, ícone de servidor com seta para a nuvem.

---

### 🟥 Slide 2 — A DOR
> **O custo que ninguém contabiliza:**

- 💸 **68%** do orçamento de TI gasto em manutenção, não em inovação.
- ⏱️ Deploys que levam **semanas** em vez de minutos.
- 🔓 Vulnerabilidades acumuladas em versões sem suporte.
- 📉 Cada mês de adiamento custa **3x mais** que a migração.

---

### 🟧 Slide 3 — A CAUSA TÉCNICA
> **Onde a maioria dos times erra:**

- ❌ **"Lift and Shift"** — Copiar o problema para a nuvem não é migrar.
- ❌ **Acoplamento monolítico** — Módulos que dependem de stored procedures de 2008.
- ❌ **Ignorar o Data Model** — Forçar schemas relacionais legados no Dataverse sem redesenho.
- ❌ **Zero automação** — Migração manual é migração que falha.

---

### 🟩 Slide 4 — A SOLUÇÃO SÊNIOR
> **Migração Gradual com o Strangler Fig Pattern:**

- ✅ **Fase 1:** Dual-Write entre on-premise e Dataverse — dados fluem para os dois lados.
- ✅ **Fase 2:** Novas features nascem direto no Dynamics 365 + Power Platform.
- ✅ **Fase 3:** Azure Service Bus orquestra a comunicação durante a transição.
- ✅ **Fase 4:** Descomissionar o legado módulo a módulo, sem downtime.

---

### 🟦 Slide 5 — O RESULTADO
> **O que muda na prática:**

- 🚀 **Deploy contínuo** — CI/CD com Azure DevOps, entregas em minutos.
- 🔒 **Compliance automático** — Políticas de segurança gerenciadas pelo Azure AD + Dataverse Security Roles.
- 📊 **Escala elástica** — Infraestrutura que cresce sob demanda, sem provisionar hardware.
- 💰 **ROI em 8 meses** — Redução média de 40% nos custos operacionais de TI.

---

### ⬛ Slide 6 — CTA
> **Quer ver o código e a arquitetura por trás disso?**

- Artigo completo com **C#, FetchXML e diagramas de arquitetura** no blog da **EAM Company**.
- 🔗 **Link nos comentários.**

---

## Parte 2: Texto da Publicação do LinkedIn (Legenda)

```
Seu sistema legado consome 68% do orçamento de TI só para se manter vivo — e cada mês de adiamento triplica o custo da migração. ↓ Deslize o carrossel para ver a estratégia sênior de migração gradual para Dynamics 365 Cloud. Link do artigo completo nos comentários. 👇

#SoftwareArchitecture #TechLeadership #Dynamics365 #CloudMigration #LegacyModernization
```

---

## Parte 3: Artigo do Blog — EAM Company

---

# Modernização de Legado: O Strangler Fig Pattern como estratégia de migração gradual para Dynamics 365 Cloud

**Por Emanuel A Macêdo** · Senior Software Engineer — Dynamics 365, Power Platform, .NET C#, Azure  
*Publicado em 14 de Outubro de 2026*

---

## Introdução

Existe um número que a maioria dos CTOs evita confrontar: em empresas com sistemas on-premise legados, **até 68% do orçamento de TI é consumido apenas para manter a operação existente** (Gartner, 2025). Não é inovação. Não é vantagem competitiva. É sobrevivência.

O problema não é falta de consciência — é falta de estratégia. A grande maioria das migrações falha não pela tecnologia de destino, mas pela abordagem: tentam mover tudo de uma vez (*Big Bang*) ou copiam a arquitetura quebrada para a nuvem (*Lift and Shift*), herdando todos os problemas com um custo mensal de cloud por cima.

Neste artigo, vou detalhar a estratégia que aplico em projetos reais de modernização: o **Strangler Fig Pattern** adaptado para o ecossistema **Dynamics 365 + Power Platform + Azure**, com código, diagramas e decisões arquiteturais.

---

## 1. O Custo Real do Legado: Além da Fatura do Servidor

Antes de falar de solução, precisamos quantificar o problema corretamente. O custo de um sistema legado on-premise **nunca** é apenas o hardware.

| Categoria de Custo | On-Premise Legado | Dynamics 365 Cloud |
|---|---|---|
| **Infraestrutura** | Servidores físicos, licenças de SO, rede, energia, refrigeração | Pay-as-you-go, escala elástica |
| **Manutenção** | Patches manuais, DBAs dedicados, zero automação | Updates gerenciados pela Microsoft, SLA de 99.9% |
| **Segurança** | Vulnerabilidades acumuladas, compliance manual | Azure AD, Conditional Access, DLP nativo |
| **Velocidade de Entrega** | Deploys quinzenais ou mensais | CI/CD com Azure DevOps, deploys em minutos |
| **Custo de Oportunidade** | Devs mantendo código legado em vez de criar valor | Time focado em features e automação |
| **Risco de Negócio** | Single point of failure, disaster recovery manual | Geo-redundância, backup automático |

O ponto crítico é o **custo de oportunidade**: cada sprint gasto corrigindo bugs em um sistema VB6/WinForms de 2012 é um sprint que não está automatizando processos de negócio com Power Automate ou construindo dashboards em tempo real com Power BI.

---

## 2. Strangler Fig Pattern: Migração Sem Risco de Big Bang

O **Strangler Fig Pattern** (cunhado por Martin Fowler) é uma estratégia onde o novo sistema cresce gradualmente ao redor do legado, substituindo funcionalidades uma a uma, até que o sistema antigo possa ser descomissionado.

Adaptado para o ecossistema Microsoft, a implementação segue quatro fases:

### Fase 1 — Dual-Write: Sincronização Bidirecional

Configuramos o **Dual-Write** entre o sistema on-premise (SQL Server) e o **Dataverse** do Dynamics 365. Isso garante que ambos os sistemas trabalham com os mesmos dados durante a transição.

### Fase 2 — Novas Features no Dynamics 365

Toda nova funcionalidade nasce diretamente no Dynamics 365 e Power Platform. O legado entra em modo de **feature freeze** — apenas correções críticas.

### Fase 3 — Orquestração com Azure Service Bus

Para módulos que precisam se comunicar entre o legado e o novo sistema, usamos o **Azure Service Bus** como broker de mensagens, desacoplando completamente as duas pontas.

### Fase 4 — Descomissionamento Gradual

Módulo por módulo, o legado é desligado. Sem Big Bang. Sem downtime.

### Diagrama de Arquitetura — Strangler Fig Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                        AZURE CLOUD                              │
│                                                                 │
│  ┌──────────────┐    ┌──────────────────┐    ┌───────────────┐  │
│  │  Dynamics 365 │◄──►│  Azure Service   │◄──►│  Azure        │  │
│  │  + Dataverse  │    │  Bus (Broker)    │    │  Functions    │  │
│  └──────┬───────┘    └────────┬─────────┘    └───────┬───────┘  │
│         │                     │                      │          │
│         │ Dual-Write          │ Messages             │ Events   │
│         │                     │                      │          │
│  ┌──────▼───────┐    ┌───────▼──────────┐    ┌──────▼────────┐  │
│  │  Power       │    │  Azure DevOps    │    │  Power BI     │  │
│  │  Automate    │    │  (CI/CD)         │    │  Dashboards   │  │
│  └──────────────┘    └──────────────────┘    └───────────────┘  │
│                                                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    Dual-Write / Service Bus
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     ON-PREMISE (LEGADO)                          │
│                                                                 │
│  ┌──────────────┐    ┌──────────────────┐    ┌───────────────┐  │
│  │  SQL Server  │◄──►│  App Server      │◄──►│  WinForms /   │  │
│  │  (Database)  │    │  (.NET Legacy)   │    │  Web App      │  │
│  └──────────────┘    └──────────────────┘    └───────────────┘  │
│                                                                 │
│               ⚠️ FEATURE FREEZE — Apenas bug fixes              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Implementação: Código Real da Camada de Sincronização

Vamos ao que interessa. Abaixo, um exemplo real de um **Azure Function** em C# que escuta eventos do Service Bus (originados no sistema legado) e sincroniza registros para o Dataverse do Dynamics 365.

### Azure Function — Sincronização Legado → Dataverse (C#)

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using System;
using System.Text.Json;

namespace EAMCompany.Migration.Functions
{
    /// <summary>
    /// Azure Function que escuta mensagens do Service Bus vindas do sistema legado
    /// e sincroniza registros de clientes para o Dataverse (Dynamics 365).
    /// Parte da estratégia Strangler Fig Pattern — Fase 3.
    /// </summary>
    public class SyncLegacyCustomerToDataverse
    {
        private readonly ServiceClient _dataverseClient;

        public SyncLegacyCustomerToDataverse(ServiceClient dataverseClient)
        {
            _dataverseClient = dataverseClient 
                ?? throw new ArgumentNullException(nameof(dataverseClient));
        }

        [FunctionName("SyncLegacyCustomer")]
        public void Run(
            [ServiceBusTrigger(
                "legacy-customer-events", 
                Connection = "ServiceBusConnection")] string message,
            ILogger log)
        {
            log.LogInformation("Evento recebido do legado: {Message}", message);

            try
            {
                var legacyCustomer = JsonSerializer.Deserialize<LegacyCustomerEvent>(message);

                if (legacyCustomer is null)
                {
                    log.LogWarning("Mensagem deserializada como null. Ignorando.");
                    return;
                }

                // Verifica se o registro já existe no Dataverse (upsert pattern)
                var existingAccount = FindAccountByLegacyId(legacyCustomer.LegacyId);

                var account = new Entity("account")
                {
                    ["name"] = legacyCustomer.CompanyName,
                    ["emailaddress1"] = legacyCustomer.Email,
                    ["telephone1"] = legacyCustomer.Phone,
                    ["eam_legacyid"] = legacyCustomer.LegacyId, // Campo custom para rastreabilidade
                    ["eam_migrationsource"] = new OptionSetValue(100000001), // "Service Bus Sync"
                    ["eam_lastsyncdate"] = DateTime.UtcNow
                };

                if (existingAccount != null)
                {
                    account.Id = existingAccount.Id;
                    _dataverseClient.Update(account);
                    log.LogInformation(
                        "Account atualizado: {Id} (LegacyId: {LegacyId})", 
                        account.Id, legacyCustomer.LegacyId);
                }
                else
                {
                    var newId = _dataverseClient.Create(account);
                    log.LogInformation(
                        "Account criado: {Id} (LegacyId: {LegacyId})", 
                        newId, legacyCustomer.LegacyId);
                }
            }
            catch (Exception ex)
            {
                log.LogError(ex, "Erro ao sincronizar customer do legado para Dataverse.");
                throw; // Reenvia para a Dead Letter Queue do Service Bus
            }
        }

        /// <summary>
        /// Busca um Account no Dataverse pelo ID legado usando FetchXML.
        /// </summary>
        private Entity? FindAccountByLegacyId(string legacyId)
        {
            var fetchXml = $@"
                <fetch top='1'>
                    <entity name='account'>
                        <attribute name='accountid' />
                        <attribute name='name' />
                        <filter>
                            <condition attribute='eam_legacyid' 
                                       operator='eq' 
                                       value='{legacyId}' />
                        </filter>
                    </entity>
                </fetch>";

            var result = _dataverseClient.RetrieveMultiple(
                new FetchExpression(fetchXml));

            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }
    }

    /// <summary>
    /// Modelo do evento enviado pelo sistema legado via Service Bus.
    /// </summary>
    public record LegacyCustomerEvent(
        string LegacyId,
        string CompanyName,
        string Email,
        string Phone,
        string EventType, // "Created", "Updated", "Deleted"
        DateTime EventTimestamp
    );
}
```

### Pontos-chave do código:

1. **Upsert Pattern:** O código verifica se o registro já existe (via `eam_legacyid`) antes de criar ou atualizar — essencial para idempotência.
2. **Rastreabilidade:** O campo `eam_migrationsource` e `eam_lastsyncdate` permitem auditar exatamente quais registros vieram do legado e quando.
3. **Dead Letter Queue:** Se a sincronização falha, o `throw` reenvia a mensagem para a DLQ do Service Bus, garantindo que nenhum dado seja perdido.
4. **FetchXML vs. LINQ:** Uso FetchXML para queries no Dataverse por performance e controle — em cenários de migração, evitar abstrações que escondam o custo da query é crítico.

---

## 4. Governança da Migração: O que ninguém te conta

A parte mais negligenciada de qualquer migração não é o código — é a **governança**. Sem ela, você acaba com dois sistemas desatualizados em vez de um.

### Checklist de Governança para Migração Gradual:

- [ ] **Feature Freeze documentado e assinado** pelo Product Owner — sem isso, o legado nunca morre.
- [ ] **Data Quality Gate** — Antes de sincronizar, valide: registros duplicados, campos nulos em campos obrigatórios do Dataverse, formatos inconsistentes.
- [ ] **Runbook de Rollback** — Para cada módulo migrado, documentar exatamente como reverter em caso de falha.
- [ ] **Métricas de Progresso** — Dashboard no Power BI mostrando: % de registros migrados, taxa de erro de sincronização, módulos descomissionados vs. pendentes.
- [ ] **Cutover Plan por módulo** — Data definida para desligar cada módulo legado, com critérios de go/no-go.
- [ ] **Treinamento dos usuários** — Dynamics 365 tem UX completamente diferente de um WinForms. Não subestime a curva de adoção.

### Query FetchXML — Dashboard de Progresso da Migração

```xml
<fetch aggregate="true">
    <entity name="account">
        <attribute name="eam_migrationsource" groupby="true" alias="source" />
        <attribute name="accountid" aggregate="count" alias="total_records" />
        <attribute name="eam_lastsyncdate" aggregate="max" alias="last_sync" />
        <filter>
            <condition attribute="statecode" operator="eq" value="0" />
        </filter>
    </entity>
</fetch>
```

Essa query alimenta um dashboard Power BI que mostra, em tempo real, quantos registros vieram de cada fonte (migração manual, Service Bus, Dual-Write) e quando foi a última sincronização.

---

## Conclusão

Migrar de on-premise para Dynamics 365 Cloud não é um projeto de TI — é uma **decisão estratégica de negócio**. O Strangler Fig Pattern remove o maior risco (o Big Bang) e permite que sua empresa continue operando enquanto moderniza.

Os pilares são:
1. **Dual-Write** para manter os dados sincronizados.
2. **Feature Freeze** no legado para forçar a adoção do novo.
3. **Azure Service Bus** para desacoplar a comunicação.
4. **Governança rigorosa** para garantir que a migração termine.

> *"O melhor momento para começar a migração era há 2 anos. O segundo melhor momento é agora."*

---

### 🔗 Quer discutir sua estratégia de migração?

Conecte-se comigo no [LinkedIn](https://linkedin.com/in/emanuelcontato) ou explore mais artigos técnicos aqui no blog da **EAM Company**.

Se esse artigo te ajudou, compartilhe com seu time — a decisão de migrar raramente é de uma pessoa só.

---

*Emanuel A Macêdo — Senior Software Engineer | Dynamics 365 · Power Platform · .NET C# · Azure*

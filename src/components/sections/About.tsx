import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

export default function About() {
  const expertise = [
    {
      title: 'Desenvolvimento Dynamics 365',
      description: 'Domínio na customização e extensão da plataforma (Sales, Customer Service) utilizando C# .NET para Plugins e Workflows, além de JavaScript para scripts client-side e validações complexas.',
      icon: '⚙️',
    },
    {
      title: 'Power Platform & Mobilidade',
      description: 'Criação de aplicações de negócio robustas com Power Apps (Canvas com capacidade offline e Model-Driven) e automação avançada de processos via Power Automate.',
      icon: '⚡',
    },
    {
      title: 'Integração & Azure',
      description: 'Experiência na orquestração de dados e processos entre sistemas heterogêneos utilizando Azure Logic Apps, Data Factory e consumo de APIs REST/SOAP.',
      icon: '☁️',
    },
    {
      title: 'Dados & Segurança',
      description: 'Modelagem de dados no Dataverse, criação de dashboards em Power BI e gestão granular de perfis de segurança e acessos.',
      icon: '🔐',
    },
    {
      title: 'Metodologia Ágil',
      description: 'Atuação consistente em ambientes ágeis (Scrum/Kanban), com foco em entregas de valor e melhoria contínua.',
      icon: '🎯',
    },
  ];

  const technologies = [
    'Microsoft Dynamics 365',
    'Microsoft Power Platform',
    'ASP.NET Core',
    'C# .NET',
    'JavaScript',
    'Azure Cloud',
    'Power Apps',
    'Power Automate',
    'Power BI',
    'Azure Logic Apps',
    'Data Factory',
    'Dataverse',
  ];

  const clients = [
    { name: 'Itaú', sector: 'Financeiro' },
    { name: 'Bradesco Seguros', sector: 'Seguros' },
    { name: 'Alesat', sector: 'Varejo' },
    { name: 'Cogna', sector: 'Educação' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        
        {/* Biografia */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {profile.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Principais Clientes */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Experiência com Grandes Players
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-1">{client.name}</h4>
                <p className="text-sm text-gray-600">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Expertise */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Principais Competências
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Tecnológico */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

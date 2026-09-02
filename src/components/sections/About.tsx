import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

export default function About() {
  const stats = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '4+', label: 'Grandes Clientes' },
    { number: '12+', label: 'Tecnologias' },
  ];

  const expertise = [
    {
      title: 'Desenvolvimento Dynamics 365',
      description: 'Domínio na customização e extensão da plataforma (Sales, Customer Service) utilizando C# .NET para Plugins e Workflows, além de JavaScript para scripts client-side e validações complexas.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Power Platform & Mobilidade',
      description: 'Criação de aplicações de negócio robustas com Power Apps (Canvas com capacidade offline e Model-Driven) e automação avançada de processos via Power Automate.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Integração & Azure',
      description: 'Experiência na orquestração de dados e processos entre sistemas heterogêneos utilizando Azure Logic Apps, Data Factory e consumo de APIs REST/SOAP.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Dados & Segurança',
      description: 'Modelagem de dados no Dataverse, criação de dashboards em Power BI e gestão granular de perfis de segurança e acessos.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Metodologia Ágil',
      description: 'Atuação consistente em ambientes ágeis (Scrum/Kanban), com foco em entregas de valor e melhoria contínua.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
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
    { name: 'Itaú', sector: 'Financeiro', icon: '🏦', experienceId: 3 },
    { name: 'Bradesco Seguros', sector: 'Seguros', icon: '🛡️', experienceId: 1 },
    { name: 'Alesat', sector: 'Varejo', icon: '⛽', experienceId: 2 },
    { name: 'Cogna', sector: 'Educação', icon: '🎓', experienceId: 4 },
  ];

  const scrollToExperience = (experienceId: number) => {
    const el = document.getElementById(`experience-${experienceId}`);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ring-2', 'ring-blue-400', 'ring-offset-2');
    setTimeout(() => el.classList.remove('ring-2', 'ring-blue-400', 'ring-offset-2'), 2000);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Engenheiro de Software Sênior especializado no ecossistema Microsoft"
        >
          Sobre Mim
        </SectionTitle>
        
        {/* Biografia */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {profile.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-center">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-extrabold gradient-text mb-2">{stat.number}</div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Principais Clientes */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Experiência com Grandes Players
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <button 
                key={index}
                onClick={() => scrollToExperience(client.experienceId)}
                className="text-center p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">{client.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{client.name}</h4>
                <p className="text-sm text-gray-500">{client.sector}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Áreas de Expertise */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Principais Competências
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="gradient-border p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                    {item.icon}
                  </div>
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
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
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

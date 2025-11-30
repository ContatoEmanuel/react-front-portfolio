import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

export default function About() {
  const skills = [
    { name: 'Microsoft Dynamics 365', level: 95 },
    { name: 'React & TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Azure Cloud', level: 80 },
    { name: 'API Integration', level: 90 },
    { name: 'Enterprise Architecture', level: 85 },
  ];

  const highlights = [
    { icon: '🎯', title: 'Especialização', text: 'Dynamics 365 & CRM' },
    { icon: '💡', title: 'Inovação', text: 'Soluções Enterprise Modernas' },
    { icon: '🚀', title: 'Experiência', text: 'Projetos de Alto Impacto' },
    { icon: '🌐', title: 'Full Stack', text: 'Front-end & Back-end' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        
        {/* Biografia */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            {profile.bio}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Com foco em Microsoft Dynamics 365, desenvolvo soluções que integram tecnologias modernas 
            com sistemas enterprise, criando experiências eficientes e escaláveis para negócios de todos os tamanhos.
          </p>
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{highlight.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.text}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Principais Competências
          </h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

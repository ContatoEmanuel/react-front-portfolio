import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const getIcon = (iconName: string) => {
    if (iconName === 'microsoft') {
      return (
        <svg className="w-8 h-8 text-[#00a4ef]" viewBox="0 0 23 23" fill="currentColor">
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
      );
    }
    return (
      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-500">
        EF
      </div>
    );
  };

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Comprovações oficiais das minhas habilidades técnicas no ecossistema Microsoft e proficiência em idiomas."
        >
          Certificações
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className={`p-8 rounded-2xl transition-all duration-300 opacity-0 animate-fade-in group relative overflow-hidden ${
                  cert.type === 'certified'
                    ? 'bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-200 shadow-md hover:shadow-xl hover:border-blue-400'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                {cert.type === 'certified' && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl shadow-sm">
                      Certificação Oficial
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(cert.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="font-semibold text-gray-700">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    
                    {cert.credentialId && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-lg text-xs font-mono text-gray-600 mb-4 border border-gray-100">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        ID: {cert.credentialId}
                      </div>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

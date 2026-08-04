import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experiences';

export default function Experience() {
  const companyIcons: Record<string, string> = {
    'Solutis Tecnologias': '🏢',
    'GFT Technologies Brasil': '🌐',
    'BRQ Digital Solutions': '💼',
    'Cogna Educação': '🎓',
    'RBA Digital': '🚀',
  };

  return (
    <section id="experience" className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Trajetória sólida no desenvolvimento de soluções Microsoft para grandes empresas dos setores financeiro, seguros, varejo e educação."
        >
          Experiência Profissional
        </SectionTitle>

        {/* Timeline Vertical */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha vertical gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

            {/* Experiências */}
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative pl-20 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  {/* Marcador na linha do tempo */}
                  <div className="timeline-dot left-0 bg-gradient-to-br from-blue-500 to-indigo-600">
                    <span className="text-2xl">{companyIcons[exp.company] || '💼'}</span>
                  </div>

                  {/* Card da Experiência */}
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-xl transition-all duration-500 group">
                    {/* Cabeçalho */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-blue-600">{exp.company}</span>
                        <span className="text-gray-300">•</span>
                        <span>{exp.location}</span>
                        {exp.client && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                              Cliente: {exp.client}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </p>
                    </div>

                    {/* Descrição */}
                    <p className="text-gray-700 mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Principais Conquistas */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-5">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                          Principais Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Download CV */}
        <div className="text-center mt-20">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.open('/resume.html', '_blank')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Currículo Completo
            </button>
            <a
              href="https://www.linkedin.com/in/emanuel-a-macedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Ver no LinkedIn
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Currículo formatado com experiências detalhadas, certificações e competências
          </p>
        </div>
      </Container>
    </section>
  );
}

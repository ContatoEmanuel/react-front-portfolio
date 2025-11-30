import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Portfólio de Projetos</SectionTitle>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Soluções desenvolvidas utilizando o ecossistema Microsoft, focadas em integração, 
          automação e modernização de processos empresariais.
        </p>

        {/* Projetos em Destaque */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {/* Thumbnail com Badge de Destaque */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      ⭐ Destaque
                    </span>
                  </div>
                  <div className="text-6xl">
                    {project.id === 1 ? '💬' : '🌐'}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.liveUrl && (
                      <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        🔗 Ver Projeto
                      </button>
                    )}
                    {project.githubUrl && (
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outros Projetos */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Ícone/Thumbnail */}
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-5xl">
                    {project.id === 3 && '🔌'}
                    {project.id === 4 && '⚡'}
                    {project.id === 5 && '☁️'}
                    {project.id === 6 && '📊'}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Ação */}
                  {project.githubUrl && (
                    <button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      Ver mais →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA GitHub */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://github.com/ContatoEmanuel', '_blank')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Ver todos os projetos no GitHub
          </button>
        </div>
      </Container>
    </section>
  );
}

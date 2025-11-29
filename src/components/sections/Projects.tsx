import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <div className="relative mb-4 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300';
                  }}
                />
                {project.featured && (
                  <Badge className="absolute top-2 right-2">Destaque</Badge>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    Ver Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

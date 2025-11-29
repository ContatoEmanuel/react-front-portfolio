import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { experiences } from '../../data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-gray-600 text-sm mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

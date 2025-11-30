import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Estou sempre aberto a novas oportunidades e colaborações.
            Entre em contato comigo através dos canais abaixo!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => window.open(`mailto:${profile.email}`, '_blank')}
            >
              📧 Email
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open(profile.linkedin, '_blank')}
            >
              💼 LinkedIn
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open(profile.github, '_blank')}
            >
              🐙 GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

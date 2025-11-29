import Container from '../layout/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/src/assets/images/profile-pic.jpg"
              alt="Foto de perfil"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/160';
              }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Olá, eu sou <span className="text-primary">Emanuel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desenvolvedor Full Stack | Especialista em React & Node.js
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

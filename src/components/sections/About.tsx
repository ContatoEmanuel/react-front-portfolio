import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Desenvolvedor Full Stack com experiência em construir aplicações web modernas e escaláveis.
            Apaixonado por tecnologia e sempre em busca de novos desafios.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Tenho experiência com React, TypeScript, Node.js, e diversas outras tecnologias do ecossistema JavaScript.
            Atualmente trabalhando em projetos que envolvem integração de sistemas e desenvolvimento de SaaS.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-gray-600 mt-1">Anos de Experiência</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-gray-600 mt-1">Projetos Concluídos</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-gray-600 mt-1">Tecnologias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-gray-600 mt-1">Dedicação</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

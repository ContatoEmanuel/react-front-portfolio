import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <Container>
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}

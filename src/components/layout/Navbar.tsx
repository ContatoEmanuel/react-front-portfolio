import { useState } from 'react';
import Container from './Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">
            EAM Company
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">
              Sobre
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition">
              Projetos
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition">
              Experiência
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 hover:text-primary transition">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-primary transition">
              Sobre
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-primary transition">
              Projetos
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 hover:text-primary transition">
              Experiência
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-primary transition">
              Contato
            </button>
          </div>
        )}
      </Container>
    </nav>
  );
}

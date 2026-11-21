import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FlouLogo } from './FlouLogo';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#talleres', label: 'Talleres' },
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#0F47AF]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line official FLOU corporate logo */}
        <a
          href="#inicio"
          aria-label="FLOU – Ir al inicio"
          className="inline-flex items-center whitespace-nowrap shrink-0 py-1"
        >
          <FlouLogo variant="color" />
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#0D1B38]/80 hover:text-[#0F47AF] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (desktop) + accessible menu button (mobile) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
              setMobileMenuOpen(false);
            }}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-[#0F47AF] text-white text-sm font-semibold hover:bg-[#082458] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Solicitar conexión
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="navegacion-movil"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] border border-[#0F47AF]/25 text-[#0F47AF] hover:bg-[#EEF3FB] transition-colors duration-150"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <nav
          id="navegacion-movil"
          aria-label="Navegación móvil"
          className="md:hidden border-t border-[#0F47AF]/15 bg-white px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center min-h-[44px] px-3 text-base font-medium text-[#0D1B38] hover:bg-[#EEF3FB] hover:text-[#0F47AF] transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center min-h-[44px] px-4 bg-[#0F47AF] text-white text-sm font-semibold hover:bg-[#082458] transition-colors duration-150"
              >
                Solicitar conexión
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import { CONTACT_INFO } from '../data/flouData';
import { FlouLogo } from './FlouLogo';

export function Footer() {
  return (
    <footer className="bg-[#0F47AF] text-white border-t border-[#082458] dark-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/20">
          <div className="md:col-span-5">
            <FlouLogo variant="light" showSlogan />
            <p className="mt-4 text-sm text-white/85 max-w-sm leading-relaxed">
              Internet por fibra óptica de alta velocidad para Bahía Solano y el Pacífico chocoano.
              Proyecto del Consorcio Troncal Virtual del Pacífico (OLE Pacific S.A.S. y Lean
              Integral TIC S.A.S.).
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-xs text-[#B4E600] font-semibold">Navegación</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a href="#inicio" className="hover:text-white hover:underline underline-offset-4">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white hover:underline underline-offset-4">
                  Catálogo de planes
                </a>
              </li>
              <li>
                <a href="#talleres" className="hover:text-white hover:underline underline-offset-4">
                  Talleres e inscripción
                </a>
              </li>
              <li>
                <a href="#proyecto" className="hover:text-white hover:underline underline-offset-4">
                  Sobre el proyecto
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white hover:underline underline-offset-4">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-xs text-[#B4E600] font-semibold">Contacto oficial</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90 font-mono tabular-nums">
              <li>
                <a href={CONTACT_INFO.phoneHref} className="hover:text-white hover:underline underline-offset-4">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="font-sans text-xs text-white/80 pt-1">
                {CONTACT_INFO.webFlou} · {CONTACT_INFO.webOle}
              </li>
              <li className="font-sans text-xs text-white/80">{CONTACT_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/80">
          <p>
            FLOU – Conexión que inspira · Consorcio Troncal Virtual del Pacífico – Ciudad Mutis
          </p>
          <p className="font-mono tabular-nums">
            Registro MinTIC RTIC 96001899 · OLE Pacific S.A.S. &amp; LIT
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowDownRight } from 'lucide-react';
import { HERO_METRICS, MEDIA_ASSETS } from '../data/flouData';
import { MediaFrame } from './MediaFrame';

interface HeroProps {
  onExploreCatalog: () => void;
}

export function Hero({ onExploreCatalog }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="border-b border-[#0F47AF]/15 bg-[#F5F8FD]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
        {/* Two-column stretched editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="font-mono text-xs sm:text-sm text-[#C25900] font-medium tracking-tight mb-4">
                Conexión que inspira · Bahía Solano, Chocó
              </p>

              <h1
                id="hero-heading"
                className="font-display font-bold text-[#0F47AF] tracking-tight leading-[1.08] text-[clamp(2.25rem,4.1vw,3.5rem)] max-w-xl"
              >
                Fibra óptica de alta velocidad para conectar el Pacífico chocoano.
              </h1>

              <p className="mt-6 text-base text-[#425270] leading-relaxed max-w-[58ch]">
                FLOU es la red de Internet por fibra óptica fruto de la alianza entre OLE Pacific
                S.A.S. y Lean Integral TIC S.A.S. Una infraestructura externa pasiva de 14.2 km en
                Ciudad Mutis, inmune a la lluvia, creada para hogares, comercios, empresas e
                instituciones.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0F47AF]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 bg-[#B4E600] text-[#082458] font-semibold text-sm sm:text-base hover:bg-[#0F47AF] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explorar planes y fichas técnicas</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <p className="font-mono text-xs text-[#425270] tabular-nums">
                Registro MinTIC RTIC 96001899 · Consorcio TVP
              </p>
            </div>
          </div>

          {/* Right visual carrier: Authentic Bahía Solano editorial photograph with measured contrast scrim */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full h-full min-h-[320px] border border-[#082458] overflow-hidden bg-[#0F47AF]">
              <MediaFrame
                src={MEDIA_ASSETS.heroBay}
                alt="Vista panorámica de la bahía y cabecera municipal de Ciudad Mutis en Bahía Solano, Chocó, territorio conectado por la red troncal de fibra óptica FLOU"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full"
                priority
                caption="Bahía Solano · Red Troncal 14.2 km"
              />
              {/* Measured bottom contrast scrim for technical location readout */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082458]/95 via-[#082458]/70 to-transparent pt-16 pb-5 px-5 sm:px-6 text-white">
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#B4E600] tabular-nums">
                  <span>TVP · Ciudad Mutis – Aeropuerto J.C.M.</span>
                  <span>06°13&apos;N · 77°24&apos;W</span>
                </div>
                <p className="mt-1.5 text-sm text-white/95 font-medium">
                  Primera red externa pasiva de fibra óptica del Gran Proyecto Troncal Virtual del
                  Pacífico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column quantitative proof strip below hero split */}
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#0F47AF]/15 bg-white">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-5 sm:p-6 border-r border-b border-[#0F47AF]/15"
            >
              <dt className="text-xs font-medium text-[#425270]">{metric.label}</dt>
              <dd className="mt-2 font-mono text-2xl font-semibold text-[#0F47AF] tabular-nums tracking-tight">
                {metric.value}
              </dd>
              <p className="mt-1.5 text-xs text-[#425270] leading-relaxed">{metric.context}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

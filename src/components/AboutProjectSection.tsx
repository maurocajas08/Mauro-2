import { FileText } from 'lucide-react';
import {
  CONSORTIUM_ENTITIES,
  FIVE_PILLARS,
  IMPACT_AXES,
  MEDIA_ASSETS,
  OFFICIAL_DOCUMENTS,
  OLE_CLIENT_DISTRIBUTION,
  PACIFIC_MUNICIPALITIES,
  PROJECT_PHASES,
} from '../data/flouData';
import { FlouLogo } from './FlouLogo';
import { MediaFrame } from './MediaFrame';
import { HeroTrunkSchematic } from './TechnicalSchematic';

const BRAND_COLORS = [
  {
    pantone: 'Pantone 2728 C',
    hex: '#0F47AF',
    rgb: 'RGB 15 · 71 · 175',
    cmyk: 'CMYK 95 · 73 · 0 · 0',
    bgClass: 'bg-[#0F47AF] text-white',
  },
  {
    pantone: 'Pantone 389 C',
    hex: '#B4E600',
    rgb: 'RGB 180 · 230 · 0',
    cmyk: 'CMYK 39 · 0 · 98 · 0',
    bgClass: 'bg-[#B4E600] text-[#082458]',
  },
  {
    pantone: 'Pantone 151 C',
    hex: '#FF8200',
    rgb: 'RGB 255 · 130 · 0',
    cmyk: 'CMYK 0 · 58 · 94 · 0',
    bgClass: 'bg-[#FF8200] text-[#082458]',
  },
];

export function AboutProjectSection() {
  return (
    <section
      id="proyecto"
      aria-labelledby="proyecto-heading"
      className="py-16 lg:py-24 border-b border-[#0F47AF]/15 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#0F47AF]/15">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-[#C25900] font-medium tabular-nums">
              03. Sobre el proyecto · Consorcio Troncal Virtual del Pacífico
            </p>
            <h2
              id="proyecto-heading"
              className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0F47AF] tracking-tight"
            >
              Ingeniería de telecomunicaciones al servicio del Pacífico chocoano
            </h2>
            <p className="mt-4 text-base text-[#425270] leading-relaxed max-w-[65ch]">
              El proyecto TVP–Bahía Solano corresponde a la primera implementación de fibra óptica
              del Gran Proyecto Troncal Virtual del Pacífico, financiado con recursos de OLE
              Pacific S.A.S., Lean Integral TIC S.A.S. e inversionistas privados. Bajo la marca
              comercial FLOU – Conexión que inspira, acerca el ritmo, la fluidez y la conectividad
              de alta velocidad a la región.
            </p>
          </div>

          {/* Official PDF documentation links */}
          <div className="lg:col-span-5 bg-[#F5F8FD] border border-[#0F47AF]/18 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0F47AF]">
                Documentación oficial de respaldo
              </h3>
              <p className="mt-2 text-sm text-[#425270]">
                Consulta los documentos institucionales del proyecto y el manual de identidad
                corporativa de FLOU.
              </p>
            </div>
            <div className="mt-5 space-y-2.5">
              <a
                href={OFFICIAL_DOCUMENTS.corporatePdf}
                download="Informacion_Corporativa_TVP_Bahia_Solano.pdf"
                className="flex items-center justify-between gap-3 min-h-[44px] px-4 py-2.5 border border-[#0F47AF]/25 bg-white text-xs sm:text-sm font-medium text-[#0F47AF] hover:bg-[#0F47AF] hover:text-white transition-colors duration-150"
              >
                <span className="truncate">Ficha Corporativa TVP – Bahía Solano (PDF)</span>
                <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={OFFICIAL_DOCUMENTS.brandManualPdf}
                download="Manual_de_Marca_FLOU.pdf"
                className="flex items-center justify-between gap-3 min-h-[44px] px-4 py-2.5 border border-[#0F47AF]/25 bg-white text-xs sm:text-sm font-medium text-[#0F47AF] hover:bg-[#0F47AF] hover:text-white transition-colors duration-150"
              >
                <span className="truncate">Manual de Identidad Corporativa FLOU (PDF)</span>
                <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Official Corporate Brand Identity Strip */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch border border-[#0F47AF]/18 bg-[#F5F8FD] p-6">
          <div className="lg:col-span-5 flex flex-col justify-between pr-2">
            <div>
              <FlouLogo variant="color" showSlogan />
              <p className="mt-4 text-sm text-[#425270] leading-relaxed">
                Construida a partir del concepto &ldquo;flow&rdquo; (fluir, movimiento, avance y
                buena energía), la identidad corporativa de FLOU combina forma de onda continua y
                tres colores oficiales para una comunicación cercana y fluida en el Pacífico.
              </p>
            </div>
            <p className="mt-4 font-mono text-xs text-[#425270]">
              Tipografía de marca: Jura Bold (títulos y eslogan) · Myriad Pro (lectura)
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {BRAND_COLORS.map((swatch) => (
              <div
                key={swatch.hex}
                className={`${swatch.bgClass} p-4 flex flex-col justify-between min-h-[126px] font-mono tabular-nums`}
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>{swatch.pantone}</span>
                </div>
                <div className="mt-4">
                  <span className="block text-lg font-bold tracking-tight">{swatch.hex}</span>
                  <span className="block text-[11px] opacity-90 mt-1">{swatch.rgb}</span>
                  <span className="block text-[11px] opacity-90">{swatch.cmyk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Photography + 14.2 km Technical Trunk Blueprint */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 flex flex-col border border-[#0F47AF]/18 bg-[#F5F8FD]">
            <MediaFrame
              src={MEDIA_ASSETS.fiberHardwareLab}
              alt="Haces de fibra óptica y terminal ONT WiFi de doble antena en entorno técnico de laboratorio"
              aspectClass="aspect-[4/3]"
              caption="Tecnología óptica pasiva y ONT WiFi"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs text-[#C25900] font-medium">
                  Red externa pasiva · 0 W en tramo exterior
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-[#0F47AF]">
                  Tecnología óptica inmune al clima del Pacífico
                </h3>
                <p className="mt-2 text-sm text-[#425270] leading-relaxed">
                  Sin consumo eléctrico en red externa, amigable con el medio ambiente y con vida
                  útil mínima de 10 años frente a lluvia intensa y humedad costera.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex">
            <HeroTrunkSchematic />
          </div>
        </div>

        {/* Consortium & Active Client Base */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSORTIUM_ENTITIES.map((entity) => (
              <article
                key={entity.nit}
                className="bg-[#F5F8FD] border border-[#0F47AF]/18 p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-xs text-[#425270] tabular-nums">
                    NIT {entity.nit} · Matrícula {entity.matricula}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#0F47AF]">
                    {entity.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#425270] leading-relaxed">{entity.role}</p>
                </div>

                <dl className="mt-5 pt-4 border-t border-[#0F47AF]/12 space-y-1.5 text-xs text-[#425270]">
                  <div>
                    <dt className="inline font-semibold text-[#0D1B38]">Registro: </dt>
                    <dd className="inline">
                      {entity.registry} ({entity.registrationDate})
                    </dd>
                  </div>
                  {entity.license && (
                    <div>
                      <dt className="inline font-semibold text-[#0D1B38]">Habilitación: </dt>
                      <dd className="inline font-mono tabular-nums">{entity.license}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>

          {/* 202 Active Clients Table */}
          <div className="lg:col-span-5 bg-[#F5F8FD] border border-[#0F47AF]/18 p-6">
            <p className="font-mono text-xs text-[#C25900] font-medium">
              Base operativa previa a migración · Bahía Solano
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold text-[#0F47AF]">
              Distribución de 202 clientes activos
            </h3>
            <p className="mt-2 text-xs text-[#425270]">
              Clientes atendidos por OLE Pacific en espectro no licenciado con tarifa preferencial
              de migración a fibra óptica.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#0F47AF]/25 text-xs font-mono text-[#425270]">
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Segmento
                    </th>
                    <th scope="col" className="py-2 px-3 font-medium text-right">
                      Clientes
                    </th>
                    <th scope="col" className="py-2 pl-3 font-medium text-right">
                      Participación
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0F47AF]/12 font-mono text-xs sm:text-sm tabular-nums">
                  {OLE_CLIENT_DISTRIBUTION.map((row) => (
                    <tr key={row.segment}>
                      <td className="py-2.5 pr-4 font-sans text-[#0D1B38]">{row.segment}</td>
                      <td className="py-2.5 px-3 text-right text-[#0D1B38]">{row.count}</td>
                      <td className="py-2.5 pl-3 text-right text-[#425270]">{row.share}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-[#0F47AF] font-mono text-sm font-semibold tabular-nums">
                    <th scope="row" className="py-2.5 pr-4 font-sans text-[#0F47AF]">
                      Total activos
                    </th>
                    <td className="py-2.5 px-3 text-right text-[#0F47AF]">202</td>
                    <td className="py-2.5 pl-3 text-right text-[#0F47AF]">100.0%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Five Fundamental Pillars */}
        <div className="mt-14 pt-12 border-t border-[#0F47AF]/15">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F47AF]">
            Cinco pilares fundamentales de nuestra propuesta
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#0F47AF]/18 bg-[#F5F8FD]">
            {FIVE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-5 border-r border-b border-[#0F47AF]/18 flex flex-col justify-between bg-white"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#C25900] tabular-nums">
                    {pillar.number}.
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-[#0F47AF] leading-snug">
                    {pillar.title}
                  </h4>
                </div>
                <p className="mt-3 text-xs text-[#425270] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Phases + Regional Impact & Municipalities */}
        <div className="mt-14 pt-12 border-t border-[#0F47AF]/15 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Schedule */}
          <div className="lg:col-span-6">
            <h3 className="font-display text-2xl font-bold text-[#0F47AF]">
              Cronograma de despliegue TVP–Bahía Solano
            </h3>
            <ol className="mt-6 divide-y divide-[#0F47AF]/15 border-t border-b border-[#0F47AF]/15">
              {PROJECT_PHASES.map((phase) => (
                <li key={phase.step} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-4 font-mono text-xs text-[#425270] tabular-nums">
                    <span className="font-semibold text-[#C25900]">{phase.step}</span>
                    <span className="block mt-0.5">{phase.period}</span>
                  </div>
                  <div className="sm:col-span-8">
                    <h4 className="font-display text-base font-bold text-[#0F47AF]">
                      {phase.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#425270]">{phase.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* 5 Municipalities in Official FLOU Blue */}
            <div className="mt-8 bg-[#0F47AF] text-white p-6 dark-surface border border-[#082458]">
              <h4 className="font-display text-lg font-bold text-white">
                Gran Proyecto Troncal Virtual del Pacífico (5 municipios)
              </h4>
              <ul className="mt-4 divide-y divide-white/15 text-xs sm:text-sm">
                {PACIFIC_MUNICIPALITIES.map((mun) => (
                  <li
                    key={mun.name}
                    className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-medium text-white">{mun.name}</span>
                    <span className="font-mono text-xs text-[#B4E600] tabular-nums">
                      {mun.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5 Impact Axes */}
          <div className="lg:col-span-6">
            <h3 className="font-display text-2xl font-bold text-[#0F47AF]">
              Impacto regional para las futuras generaciones
            </h3>
            <p className="mt-2 text-sm text-[#425270]">
              Un proyecto de alto impacto orientado al desarrollo sostenible y la competitividad de
              la subregión del Pacífico chocoano.
            </p>
            <div className="mt-6 space-y-4">
              {IMPACT_AXES.map((axis, idx) => (
                <div
                  key={axis.title}
                  className="p-5 bg-[#F5F8FD] border border-[#0F47AF]/18"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C25900] tabular-nums">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <h4 className="font-display text-lg font-bold text-[#0F47AF]">{axis.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-[#425270] leading-relaxed">{axis.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

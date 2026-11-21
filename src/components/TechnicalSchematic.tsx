import type { SchematicType } from '../data/flouData';

interface TechnicalSchematicProps {
  type: SchematicType;
  altText: string;
  compact?: boolean;
}

export function HeroTrunkSchematic() {
  return (
    <div
      className="relative w-full h-full min-h-[340px] bg-[#0F47AF] text-white border border-[#082458] p-6 sm:p-8 flex flex-col justify-between lab-grid-dark overflow-hidden"
      role="img"
      aria-label="Esquema técnico de laboratorio de la red troncal de fibra óptica de 14.2 kilómetros desde la Cabecera Municipal de Ciudad Mutis hasta el Aeropuerto José Celestino Mutis en Bahía Solano"
    >
      {/* Top coordinate header */}
      <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4 text-xs font-mono text-white/85 tabular-nums">
        <span>TVP · Bahía Solano</span>
        <span>06°13&apos;N · 77°24&apos;W</span>
      </div>

      {/* Main SVG optical trunk blueprint in FLOU brand palette */}
      <div className="my-6 flex-1 flex items-center justify-center">
        <svg
          viewBox="0 0 520 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[250px]"
          aria-hidden="true"
        >
          {/* Reference coordinate rules */}
          <line x1="20" y1="220" x2="500" y2="220" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1" />
          <line x1="20" y1="214" x2="20" y2="226" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" />
          <line x1="180" y1="216" x2="180" y2="224" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="340" y1="216" x2="340" y2="224" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="500" y1="214" x2="500" y2="226" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" />

          {/* Coastal Pacific contour hint */}
          <path
            d="M28 48 C 85 52, 118 82, 160 112 C 210 148, 280 158, 365 170 C 425 178, 468 175, 495 162"
            stroke="#FFFFFF"
            strokeOpacity="0.24"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Secondary distribution grids representing Ciudad Mutis neighborhoods */}
          <g stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="1">
            <rect x="46" y="42" width="110" height="68" />
            <line x1="74" y1="42" x2="74" y2="110" />
            <line x1="102" y1="42" x2="102" y2="110" />
            <line x1="130" y1="42" x2="130" y2="110" />
            <line x1="46" y1="65" x2="156" y2="65" />
            <line x1="46" y1="88" x2="156" y2="88" />
          </g>

          {/* Main 14.2 km optical fiber backbone in FLOU Fluor Green (#B4E600) */}
          <path
            d="M74 76 L156 76 L216 122 L338 148 L452 148"
            stroke="#B4E600"
            strokeWidth="3.5"
            strokeLinejoin="miter"
          />

          {/* Passive optical splitter branches */}
          <path d="M156 76 L156 132 L198 132" stroke="#B4E600" strokeOpacity="0.75" strokeWidth="1.5" />
          <path d="M216 122 L216 68 L272 68" stroke="#B4E600" strokeOpacity="0.75" strokeWidth="1.5" />
          <path d="M338 148 L338 92 L392 92" stroke="#FF8200" strokeWidth="1.8" />

          {/* Nodes along backbone */}
          <circle cx="74" cy="76" r="7" fill="#B4E600" />
          <circle cx="74" cy="76" r="13" stroke="#B4E600" strokeOpacity="0.5" strokeWidth="1.2" />

          <circle cx="216" cy="122" r="4.5" fill="#FFFFFF" />
          <circle cx="338" cy="148" r="4.5" fill="#FF8200" />

          <rect x="444" y="140" width="16" height="16" fill="#B4E600" />
          <rect x="438" y="134" width="28" height="28" stroke="#B4E600" strokeOpacity="0.5" strokeWidth="1.2" />

          {/* Labels */}
          <text x="46" y="30" fill="#FFFFFF" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            Cabecera Ciudad Mutis
          </text>
          <text x="278" y="72" fill="#E8F0FF" fontSize="10" fontFamily="IBM Plex Mono, monospace">
            Acceso ONT Hogar / Comercio
          </text>
          <text x="398" y="96" fill="#FFB266" fontSize="10" fontFamily="IBM Plex Mono, monospace">
            Enlaces Dedicados
          </text>
          <text x="352" y="188" fill="#FFFFFF" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            Aeropuerto J. C. Mutis
          </text>

          {/* Scale labels */}
          <text x="20" y="242" fill="#E8F0FF" fontSize="10" fontFamily="IBM Plex Mono, monospace">
            0.0 km
          </text>
          <text x="225" y="242" fill="#B4E600" fontSize="10" fontFamily="IBM Plex Mono, monospace">
            Red externa pasiva · 14.2 km
          </text>
          <text x="460" y="242" fill="#E8F0FF" fontSize="10" fontFamily="IBM Plex Mono, monospace">
            14.2 km
          </text>
        </svg>
      </div>

      {/* Bottom technical legend */}
      <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-4 text-xs font-mono tabular-nums">
        <div>
          <span className="block text-white/80">Consumo externo</span>
          <span className="mt-0.5 block text-sm font-semibold text-white">0 W pasivo</span>
        </div>
        <div>
          <span className="block text-white/80">Resistencia lluvia</span>
          <span className="mt-0.5 block text-sm font-semibold text-[#B4E600]">100% inmune</span>
        </div>
        <div>
          <span className="block text-white/80">Base migrable</span>
          <span className="mt-0.5 block text-sm font-semibold text-white">202 clientes</span>
        </div>
      </div>
    </div>
  );
}

export function TechnicalSchematic({ type, altText, compact = false }: TechnicalSchematicProps) {
  const heightClass = compact ? 'h-36' : 'h-56 sm:h-64';

  const renderGraphic = () => {
    switch (type) {
      case 'plan-6':
      case 'plan-10':
      case 'plan-15':
      case 'plan-20':
      case 'plan-50': {
        const speedMap: Record<string, { mbps: number; bars: number; tier: string; highlight: string }> = {
          'plan-6': { mbps: 6, bars: 2, tier: 'HOGAR', highlight: '#B4E600' },
          'plan-10': { mbps: 10, bars: 4, tier: 'HOGAR', highlight: '#B4E600' },
          'plan-15': { mbps: 15, bars: 6, tier: 'HOGAR', highlight: '#B4E600' },
          'plan-20': { mbps: 20, bars: 8, tier: 'COMERCIAL', highlight: '#FF8200' },
          'plan-50': { mbps: 50, bars: 12, tier: 'COMERCIAL', highlight: '#FF8200' },
        };
        const cfg = speedMap[type];
        const totalBars = 12;

        return (
          <svg viewBox="0 0 360 150" fill="none" className="w-full h-full" aria-hidden="true">
            <line x1="20" y1="118" x2="340" y2="118" stroke="#0F47AF" strokeOpacity="0.22" strokeWidth="1" />
            <line x1="20" y1="30" x2="340" y2="30" stroke="#0F47AF" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />

            {Array.from({ length: totalBars }).map((_, i) => {
              const active = i < cfg.bars;
              const x = 24 + i * 26;
              const barHeight = 20 + i * 6.5;
              const y = 118 - barHeight;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width="16"
                  height={barHeight}
                  fill={active ? (i >= cfg.bars - 2 ? cfg.highlight : '#0F47AF') : '#0F47AF'}
                  fillOpacity={active ? 1 : 0.1}
                />
              );
            })}

            <text x="24" y="22" fill="#425270" fontSize="10" fontFamily="IBM Plex Mono, monospace">
              PERFIL ÓPTICO · {cfg.tier}
            </text>
            <text x="275" y="22" fill="#0F47AF" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">
              {cfg.mbps} Mbps
            </text>
            <text x="24" y="138" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              ONT WiFi en comodato · Tráfico ilimitado
            </text>
          </svg>
        );
      }

      case 'dedicado':
        return (
          <svg viewBox="0 0 360 150" fill="none" className="w-full h-full" aria-hidden="true">
            <rect x="24" y="46" width="84" height="58" stroke="#0F47AF" strokeWidth="1.5" fill="#FFFFFF" />
            <text x="36" y="72" fill="#0F47AF" fontSize="10" fontWeight="600" fontFamily="IBM Plex Mono, monospace">
              NODO TVP
            </text>
            <text x="36" y="88" fill="#425270" fontSize="9" fontFamily="IBM Plex Mono, monospace">
              Ciudad Mutis
            </text>

            {/* Dedicated dual channel in FLOU Blue and Orange */}
            <line x1="108" y1="64" x2="252" y2="64" stroke="#0F47AF" strokeWidth="2.5" />
            <line x1="108" y1="86" x2="252" y2="86" stroke="#FF8200" strokeWidth="3" />
            <polygon points="246,59 254,64 246,69" fill="#0F47AF" />
            <polygon points="114,81 106,86 114,91" fill="#FF8200" />

            <rect x="252" y="46" width="84" height="58" fill="#0F47AF" />
            <text x="266" y="72" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="IBM Plex Mono, monospace">
              ENTIDAD
            </text>
            <text x="266" y="88" fill="#B4E600" fontSize="9" fontFamily="IBM Plex Mono, monospace">
              10+ Mbps
            </text>

            <text x="130" y="54" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Canal exclusivo
            </text>
            <text x="128" y="106" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              SLA acordado
            </text>
            <text x="24" y="136" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Telemedicina · Instituciones · Empresas
            </text>
          </svg>
        );

      case 'troncal':
        return (
          <svg viewBox="0 0 360 150" fill="none" className="w-full h-full" aria-hidden="true">
            <path d="M28 92 L110 92 L162 62 L262 62 L332 92" stroke="#0F47AF" strokeWidth="3" />
            <path d="M28 92 L110 92 L162 62 L262 62 L332 92" stroke="#B4E600" strokeWidth="1.6" strokeDasharray="8 6" />
            <circle cx="28" cy="92" r="6" fill="#0F47AF" />
            <circle cx="162" cy="62" r="5" fill="#B4E600" stroke="#0F47AF" strokeWidth="1.5" />
            <circle cx="262" cy="62" r="5" fill="#FF8200" stroke="#0F47AF" strokeWidth="1.5" />
            <rect x="326" y="86" width="12" height="12" fill="#0F47AF" />
            <text x="24" y="42" fill="#0F47AF" fontSize="10" fontWeight="600" fontFamily="IBM Plex Mono, monospace">
              14.2 km FIBRA ÓPTICA EXTERNA
            </text>
            <text x="24" y="118" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Ciudad Mutis
            </text>
            <text x="234" y="118" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Aeropuerto J.C.M.
            </text>
            <text x="24" y="138" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              1.000 clientes iniciales · Escala a 3.000
            </text>
          </svg>
        );

      case 'ont-wifi':
        return (
          <svg viewBox="0 0 360 150" fill="none" className="w-full h-full" aria-hidden="true">
            {/* Optical fiber input in Fluor Green */}
            <line x1="24" y1="86" x2="112" y2="86" stroke="#B4E600" strokeWidth="3.5" />
            <text x="24" y="76" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Fibra óptica
            </text>

            {/* ONT unit in FLOU Blue */}
            <rect x="112" y="64" width="110" height="44" fill="#0F47AF" />
            <line x1="138" y1="64" x2="138" y2="28" stroke="#0F47AF" strokeWidth="3" />
            <line x1="196" y1="64" x2="196" y2="28" stroke="#0F47AF" strokeWidth="3" />
            <circle cx="132" cy="86" r="3.5" fill="#B4E600" />
            <text x="144" y="90" fill="#FFFFFF" fontSize="10" fontFamily="IBM Plex Mono, monospace">
              ONT WiFi
            </text>

            {/* WiFi arcs */}
            <path d="M242 74 C252 80 252 92 242 98" stroke="#0F47AF" strokeWidth="2.2" />
            <path d="M254 66 C268 76 268 96 254 106" stroke="#B4E600" strokeWidth="2.4" />
            <path d="M266 58 C284 72 284 100 266 114" stroke="#FF8200" strokeWidth="2.2" />

            <text x="24" y="136" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Equipo terminal entregado en comodato
            </text>
          </svg>
        );

      case 'pacifico':
      default:
        return (
          <svg viewBox="0 0 360 150" fill="none" className="w-full h-full" aria-hidden="true">
            {/* 5 coastal nodes along Pacific Chocó */}
            <path d="M68 28 L128 52 L176 78 L224 102 L278 122" stroke="#0F47AF" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="68" cy="28" r="4.5" fill="#FFFFFF" stroke="#0F47AF" strokeWidth="1.8" />
            <circle cx="128" cy="52" r="7.5" fill="#B4E600" stroke="#0F47AF" strokeWidth="2.2" />
            <circle cx="176" cy="78" r="4.5" fill="#FFFFFF" stroke="#0F47AF" strokeWidth="1.8" />
            <circle cx="224" cy="102" r="4.5" fill="#FFFFFF" stroke="#0F47AF" strokeWidth="1.8" />
            <circle cx="278" cy="122" r="4.5" fill="#FFFFFF" stroke="#0F47AF" strokeWidth="1.8" />

            <text x="82" y="31" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Juradó
            </text>
            <text x="144" y="55" fill="#0F47AF" fontSize="10.5" fontWeight="600" fontFamily="IBM Plex Mono, monospace">
              Bahía Solano (Fase 1)
            </text>
            <text x="190" y="81" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Nuquí
            </text>
            <text x="238" y="105" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Bajo Baudó
            </text>
            <text x="148" y="136" fill="#425270" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
              Litoral del San Juan
            </text>
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-full ${heightClass} bg-[#EEF3FB] border-b border-[#0F47AF]/15 px-4 py-3 flex items-center justify-center lab-grid-bg`}
      role="img"
      aria-label={altText}
    >
      {renderGraphic()}
    </div>
  );
}
